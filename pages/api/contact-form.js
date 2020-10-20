// import { SENDGRID_API_KEY } from '../../lib/sendgridSetup';
const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  const form = req.body;
  let recaptchaValid = false;

  try {
    let validationFetch = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${form.token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const validationResponse = await validationFetch.json();
    if (validationResponse.success == true) {
      recaptchaValid = true;

      console.log('Validation Success... Sending Email');
      await sendEmail(form);
    } else {
      recaptchaValid = false;
      console.log('Validation Fail... Not sending Email');
    }
  } catch (e) {
    console.log('Validation Error', e);
  }

  if (recaptchaValid == true) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

const sendEmail = async (form) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.CONTACT_FORM_EMAIL_RECEIVER, // Change to your recipient
    from: process.env.CONTACT_FORM_EMAIL_SENDER, // Change to your verified sender
    subject: `Contact Form Submission - ${form.name}`,
    html: `Name: ${form.name}<br/>Email: ${form.email}<br/>Course: ${form.course}<br/>Message: ${form.message}`,
  };
  try {
    console.log('Sending email...');
    await sgMail.send(msg);
    console.log('Email sent!');
  } catch (err) {
    console.log('Error sending email');
    console.error(err.toString());
  }
};
