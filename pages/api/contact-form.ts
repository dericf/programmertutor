import { EmailMessage, sendEmail } from 'lib/emailHelpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { ContactFormResponse, ContactFormSubmitData } from 'types/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form: ContactFormSubmitData = req.body;
  // Check human validation
  const isHuman: boolean = await validateToken(form.token);
  if (isHuman === false) {
    return res.send({
      success: false,
      error: 'Failed Robot Check',
    } as ContactFormResponse);
  }
  // Success! submitter is a human
  //
  // Do extra validation here before sending email.
  //
  if (validateFormData(form) === false) {
    return res.send({
      success: false,
      error: 'Form data was invalid',
    } as ContactFormResponse);
  }
  const msg: EmailMessage = {
    to: process.env.CONTACT_FORM_EMAIL_RECEIVER,
    from: process.env.CONTACT_FORM_EMAIL_SENDER,
    subject: `Contact Form Submission - ${form.name}`,
    html: `Name: ${form.name}<br/>Email: <a href="mailto:${form.email}">${form.email}</a><br/>Course: ${form.course}<br/>Message: ${form.message}`,
  };
  await sendEmail(msg);
  res.send({ success: true } as ContactFormResponse);
};

const validateToken = async (token: string): Promise<boolean> => {
  let validationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${token}`;
  try {
    const validationResponse: Response = await fetch(validationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const validationData = await validationResponse.json();
    return validationData.success;
  } catch (e) {
    console.log('Validation Error', e);
    return false;
  }
};

const validateFormData = (form: ContactFormSubmitData): boolean => {
  return ((form.name.length !== 0) && (form.email.length !== 0) || (form.agreedToTerms === true))
}