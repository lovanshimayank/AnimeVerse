const nodemailer = require("nodemailer");

console.log("EMAIL USER:", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: false,
  },
});

const sendOrderEmail = async (email, name, status, orderId) => {
  try {
    console.log("Sending email to:", email);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `AnimeVerse Order Update - ${status}`,
      html: `
        <h2>Hello ${name}</h2>
        <p>Your order status is now <b>${status}</b>.</p>
        <p>Order ID: ${orderId}</p>
      `,
    });

    console.log("EMAIL SENT!");
    console.log(info);

  } catch (err) {
    console.log("EMAIL ERROR:");
    console.log(err);
  }
};

module.exports = sendOrderEmail;