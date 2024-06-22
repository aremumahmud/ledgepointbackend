const express = require('express');
const { login, getClients, sendEmail, addClient } = require('../controllers/adminController');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

router.post('/login', login);
router.get('/clients', getClients);
router.post('/send_email', sendEmail);
router.post('/clients', addClient);

module.exports = router;