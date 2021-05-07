import nodemailer from "nodemailer";
import smtpTransport from 'nodemailer-smtp-transport';
import dotenv from 'dotenv'
dotenv.config()

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL_ADRESS,
        pass: process.env.EMAIL_TOKEN
    }
}));

var mailOptions = {
    from: '',
    to: 'krissoengberg@gmail.com',
    subject: '',
    text: ''
};

function sendMail(mailOptions) {

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export { mailOptions, sendMail };