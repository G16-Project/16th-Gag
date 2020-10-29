const { decode } = require("jsonwebtoken");
const { verifyToken } = require("../helpers/jwt");

async function authentication(request, response, next) {
    try {
        const { token } = request.headers;
        if (!token) {
            response.status(401).json({
                message: "Authentication failed"
            });
        } else {
            const decoded = verifyToken(token);
            const user = await User.findOne({
                where: {
                    email: decode.email
                }
            })
            if (!user) {
                response.status(401).json({
                    message: "Authentication Failed"
                });
            } else {
                request.loggedInUser = decoded;
                next();
            }
        }
    } catch (error) {
        response.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = authentication;