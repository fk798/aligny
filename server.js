const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer= require("nodemailer");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const messages = [];

app.get('/api/messages', (req, res) => {
    res.json(messages);
});
app.post('/api/messages', (req, res) => {
    const message = req.body;
    messages.push(message);
    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'faisalk.karim3@gmail.com',
            pass: "Allah786nyunm"
        }
    })
    let mailOptions = {
        from: '"Faisal Karim <faisalk.karim3@gmail.com>',
        to: 'faisalk.karim3@gmail.com',
        subject: "Message from AAANY Viewer",
        text: message.firstName + " " + message.lastName + ": " + message.email + " - " + message.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log("Message sent")
    })
    console.log(req.body);
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`Listening on port ${port}`));
