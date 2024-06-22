const jwt = require('jsonwebtoken');
const knex = require('../config/knex');

const authenticateToken = (req, res, next) => {

    let auth = req.header('Authorization')

    const token = auth ? auth.split(' ')[1] : null;
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
        if (err) return res.status(403).send('Invalid token');
        req.admin = admin;
        next();
    });
};

module.exports = authenticateToken;