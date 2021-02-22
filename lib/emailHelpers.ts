const sgMail = require('@sendgrid/mail');

export interface EmailMessage {
	to: string,
	from: string,
	subject: string,
	html: string,
}

export const sendEmail = async (msg: EmailMessage) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    await sgMail.send(msg);
  } catch (err) {
    console.error('Error sending email');
    console.error(err.toString());
  }
};