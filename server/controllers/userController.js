const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { loginToken } = require("../helpers/jwt");

class userController {
    static async register(request, response, next) {
        try {
            const payload = {
                email: request.body.email,
                password: request.body.password
            }
            console.log(payload)
            const user = await User.create(payload);
            console.log("Register Success");
            response.status(201).json ({
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
            const user = await User.findOne ({
                where: {
                    email: payload.email
                }
            });
            if(!user) {
                throw({ message: "Wrong email/password!", status: 404 })
            } else if (!comparePassword(payload.password, user.password)) {
                throw({ message: "Wrong email/password!", status: 401 })
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
}

module.exports = userController;