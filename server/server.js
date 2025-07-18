const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

//Combine hardcoded & .env-based allowed origins
const defaultOrigins = [
  'https://tonyincode.com',
  'https://personal-portfolio-website-react-node-irwue3loy.vercel.app',
  ...(process.env.CORS_ORIGIN?.split(',') || [])
];
const envOrigins = process.env.CORS_ORIGIN?.split(',') || [];
const allowedOrigins = [...defaultOrigins, ...envOrigins];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error('CORS not allowed for this origin'));
    }
  }
}));

app.use(express.json());

//Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Email transporter setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter ready');
  }
});

//Contact endpoint
app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: process.env.EMAIL_USER,
    to: "tonyincode@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error('Send mail error:', error);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    } else {
      res.status(200).json({ success: true, message: 'Message sent successfully' });
    }
  });
});
