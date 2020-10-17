// import { SENDGRID_API_KEY } from '../../lib/sendgridSetup';
const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  const form = req.body;
  let recaptchaValid = true;

  let payload = {
    secret: process.env.RECAPTCHA_SERVER_KEY,
    response: form.token,
  };

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('sgMail', sgMail);
  console.log('RCPTCHA: ', payload.secret);
  console.log('Sendgrid API: ', process.env.SENDGRID_API_KEY);
  console.log(
    'process.env.CONTACT_FORM_EMAIL_RECEIVER',
    process.env.CONTACT_FORM_EMAIL_RECEIVER
  );
  console.log(
    'process.env.CONTACT_FORM_EMAIL_SENDER',
    process.env.CONTACT_FORM_EMAIL_SENDER
  );
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
    res.send({ success: true });
  } catch (err) {
    console.log('Error sending email');
    console.error(err.toString());
    resp.send({ success: false });
  }

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
  // if (recaptchaValid == true) {
  //   res.send({ success: true });
  // } else {
  //   res.send({ success: false });
  // }
};
