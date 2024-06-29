function mail_temp(user, data) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Assigned Investor</title>
    <style>
        @import url('https://fonts.cdnfonts.com/css/sanomat-sans-trial');
        * {
            font-family: "Sanomat Sans Trial", sans-serif !important;
        }
    </style>
</head>

<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ddd; padding: 20px;">
        <div style="text-align: center; padding: 20px 0;">
            <img src="https://res.cloudinary.com/dvauarkh6/image/upload/v1718445891/IMG-20240530-WA0029_i9t9vn.jpg" alt="Ledgepoint Finances" style="max-width: 100%; height: auto;">
        </div>
        <div style="padding: 20px;">
            <p>Dear ${user},</p>
            <p>Thank you for providing the necessary information to help us understand your business needs. We are pleased to inform you that we have matched you with an investor who aligns perfectly with your goals and requirements.</p>
            <p><strong>Your Assigned Investor:</strong></p>
            <p><strong>Name:</strong> ${data.investor_name}<br>
                <strong>Position:</strong> ${data.investor_position}<br>
                <strong>Email:</strong> <a href="mailto:${data.investor_email}" style="color: #0073e6;">${data.investor_email}</a><br>
                <strong>Phone:</strong> ${data.investor_phone}</p>
            <p>${data.investor_name[0].toUpperCase() + data.investor_name.slice(1)} has extensive experience in finance and is excited to collaborate with you to achieve your business objectives. They will be reaching out to you shortly to discuss your funding options and next steps.</p>
            <p>In the meantime, if you have any questions or need further assistance, please feel free to contact us. We are here to support you every step of the way.</p>
            <p>We look forward to seeing your business thrive with the help of Ledgepoint Finances and our dedicated investors.</p>
            <p>Best regards,</p>
            <p>Mohammad S.A<br> Chief Executive Officer<br> Ledgepoint Finances</p>
        </div>
        <div style="text-align: center; font-size: 12px; color: #777; padding: 20px;">
            <p>info@ledgepointfinances.com | ledgepointfinances.com</p>
        </div>
    </div>
</body>

</html>
    
    `
}


module.exports = mail_temp