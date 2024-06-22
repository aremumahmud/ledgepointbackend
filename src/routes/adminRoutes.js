const express = require('express');
const { login, getClients, sendEmail, addClient } = require('../controllers/adminController');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

router
    .route('/login')
    .post(login);
router
    .route('/clients')
    .get(getClients);


router
    .route('/clients')
    .post(addClient);

router
    .route('/send_email')
    .post(sendEmail);

module.exports = router;