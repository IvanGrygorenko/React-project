const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { email, message } = req.body;


    let transporter = nodemailer.createTransport({
        host: 'smtp.ukr.net',
        port: 465,
        secure: true,
        auth: {
            user: 'vanua.the.best3@ukr.net',
            pass: ''
        }
    });

    let mailOptions = {
        from: 'vanua.the.best3@ukr.net',
        to: 'vanua.the.best3@ukr.net',
        subject: 'Нове повідомлення',
        text: `Email: ${email}\nПовідомлення: ${message}`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Помилка під час надсилання повідомлення');
        } else {
            console.log('Email надіслано: ' + info.response);
            res.status(200).send('Повідомлення надіслано успішно');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});