const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../config/knex');
const nodemailer = require('nodemailer');
const send_email = require('../utils/mail');

exports.login = async(req, res) => {
    const { email, password } = req.body;
    const admin = await knex.knex('admins').where({ email }).first();

    if (!admin || !await bcrypt.compare(password, admin.password)) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

exports.getClients = async(req, res) => {
    const clients = await knex.knex('clients').select('*');
    res.json(clients);
};

exports.sendEmail = async(req, res) => {
    const { email, investorID, client_name } = req.body;
    const client = await knex.knex('clients').where({ id: investorID }).first();

    if (!client) {
        return res.status(404).send('Client not found');
    }
    send_email(email, client_name || 'Client', client, res)

};

exports.addClient = async(req, res) => {
    const { investor_email, investor_name, investor_phone, investor_position } = req.body;

    try {
        await knex.knex('clients').insert({
            investor_email,
            investor_name,
            investor_phone,
            investor_position
        });
        res.status(201).json({});
    } catch (error) {
        console.log(error)
        res.status(400).send('Error adding client');
    }
};