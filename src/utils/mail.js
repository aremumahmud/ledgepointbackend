const nodemailer = require('nodemailer');
const mail_temp = require('./mail_temp');

function send_email(email, user, data, res) {
    console.log(email, user, data)
    let transporter = nodemailer.createTransport({
        //host: 'smtp-relay.sendinblue.com',
        host: 'point@ledgescapitals.com',
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
        subject: "We've got the right investor for you!",


        html: mail_temp(user, data)
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

module.exports = send_email