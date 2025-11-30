const nodemailer = require("nodemailer");

let sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

   

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // your Gmail
      subject: "New Form Submission ✔",
      html: `
        <h2>New Message Arrived 😎</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✔ Mail sent:", info.messageId);
    res.send("Form submitted & email sent successfully!");
  } catch (err) {
    console.log(err);
    res.send("Error sending email!");
  }
};

module.exports = sendMail;
