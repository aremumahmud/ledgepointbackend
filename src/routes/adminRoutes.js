const express = require('express');
const { login, getClients, sendEmail, addClient, sendEmail2 } = require('../controllers/adminController');
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

router
    .route('/send_email_me')
    .post(sendEmail2);

module.exports = router;