import { SENDGRID_API_KEY } from '../../lib/sendgridSetup';
import fetch from 'node-fetch';

module.exports = async (req, res) => {
  const form = req.body;
  let recaptchaValid = true;

  let payload = {
    secret: process.env.RECAPTCHA_SERVER_KEY,
    response: form.token,
  };

  // console.log('RCPTCHA: ', payload.secret);
  await sendEmail(form);
  // fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${payload.secret}&response=${payload.response}`,
  //   {
  //     method: "POST",
  //    }
  // ).then(resp => resp.json()
  // ).then(json => {
  //   console.log('GCaptcha Validation', json)
  //   if (json.success == true) {
  //     recaptchaValid = true;
  //     sendEmail(form);
  //   } else {
  //     recaptchaValid = false;
  //   }
  //   return
  // }).catch((e) => {
  //   console.log('Error with validation request', e)
  //   return
  // })
  if (recaptchaValid == true) {
    res.send('Success');
  } else {
    res.send('Error');
  }
};

const sendEmail = async (form) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.CONTACT_FORM_EMAIL_RECEIVER, // Change to your recipient
    from: process.env.CONTACT_FORM_EMAIL_SENDER, // Change to your verified sender
    subject: `Contact Form Submission - ${form.name}`,
    html: `Name: ${form.name}<br/>Email: ${form.email}<br/>Course: ${form.course}<br/>Message: ${form.message}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error('SendGrid Error');
    });
};
