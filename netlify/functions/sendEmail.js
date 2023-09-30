// netlify/functions/sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.handler = async (event) => {
  const pass = process.env.EMAILPASS;
  const user = process.env.EMAIL;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      port: 2525,
      auth: {
        user: user,
        pass: pass,
      },
      authMethod: "PLAIN",
    });

    // Access request data from event.body
    const data = JSON.parse(event.body);

    const mailOptions = {
      from: data.email,
      to: "morseylane@gmail.com",
      subject: `Message from ${data.email}: ${data.subject}`,
      text: data.content,
    };

    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully", info }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Email sending failed",
        message: error.message,
      }),
    };
  }
};
