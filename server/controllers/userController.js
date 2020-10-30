const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { loginToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library');

class userController {
	static async register(request, response, next) {
		try {
			const payload = {
				email: request.body.email,
				password: request.body.password
			}
			const user = await User.create(payload);
			console.log("Register Success");
			response.status(201).json({
				id: user.id,
				email: user.email
			})
		} catch (error) {
			next(error);
		}
	}

	static async login(request, response, next) {
		try {
			const payload = {
				email: request.body.email,
				password: request.body.password
			}
			const user = await User.findOne({
				where: {
					email: payload.email
				}
			});
			if (!user) {
				throw ({ message: "Wrong email/password!", status: 404 })
			} else if (!comparePassword(payload.password, user.password)) {
				throw ({ message: "Wrong email/password!", status: 401 })
			} else {
				const access_token = loginToken({
					id: user.id,
					email: user.email
				});
				response.status(200).json({
					access_token
				});
			}
		} catch (error) {
			console.log(error)
			console.log("ERRORRR!")
			next(error);
		}
	}

	static googleLogin(request, response, next) {
		let { id_token } = request.body
		const CLIENT_ID = `793049894644-agg11tghfurrmpd3far5fs46loqi997r.apps.googleusercontent.com`
		const client = new OAuth2Client(CLIENT_ID);
		verify()
		async function verify() {
			try {
				const ticket = await client.verifyIdToken({
					idToken: id_token,
					audience: CLIENT_ID,
				});
				const payload = ticket.getPayload();
				const user = await User.findOne({
					where: {
						email: payload.email
					}
				})
				if (!user) {
					user = await User.create({
						email: payload.email,
						password: id_token
					})
				}
				let access_token = loginToken({ id: user.id, email: user.email })
				response.status(200).json({ access_token })
			} catch (error) {
				next(error)
			}
		}
	}
}

module.exports = userController;