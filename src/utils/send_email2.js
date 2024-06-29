const nodemailer = require('nodemailer');
const temps = require('./mailtempr2');

function send_email2(email, data, res) {

    let transporter = nodemailer.createTransport({
        //host: 'smtp-relay.sendinblue.com',
        host: 'mail.ledgescapitals.com',
        port: 587,
        secure: false, // use SSL

        auth: {
            user: "point@ledgescapitals.com",
            pass: 'Aremu2003$$'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages');
        }
    });
    var mailOptions = {
        from: 'Ledge Point Finances <point@ledgescapitals.com>',
        to: email,
        subject: "Custumer sent in a Message!",


        html: temps(data)
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.send({ error: true })

        } else {
            console.log('Email sent: ' + info.response);
            // res.redirect('/#success_message')
            res.send({ error: false })
        }
    });


}

// send_email1('aremumahmud2003@gmail.com')

module.exports = send_email2