

const logRoutes = (req, res, next) => {
    console.log('requisicao: '+ req.route.path);
    return next();
}

module.exports = logRoutes;