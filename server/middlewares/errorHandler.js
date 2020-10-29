module.exports = function(err, request, response, next) {
    console.log(err);
    response.status(err.status).json(err);
}