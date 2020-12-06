const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const route = express.Router();
const port = process.env.PORT || 2020;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'faraj.shuaip97@gmail.com',
        },
    secure: true,
})

app.use('/v1', route);


route.post('/sendemail', (req, res) => {
    const { from , subject, text} = req.query
    const mailData = {
        to: 'faraj.shuaip97@gmail.com', 
        from: from, 
        subject: subject,
        text: text
    };
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
         res.status(200).send({message: 'mail send'});
     });
})



app.listen(port, () => console.log(`Express server currently running on port ${port}`));