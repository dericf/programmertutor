import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormResponse, ContactFormSubmitData } from 'types/types';
import { TermsAndConditions } from './TermsAndConditions';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import { FormInfoBox } from './FormInfoBox';
import { PrivacyPolicy } from './PrivacyPolicy';

type ContactForm = {
  name: string;
  email: string;
  course: string;
  message: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  isSuccess: boolean;
  isSubmitting: boolean;
  agreedToTerms: boolean;
};

type ContactFormErrors = {
  name: string;
  email: string;
};

const FormErrors: ContactFormErrors = {
  name: 'Please enter your name',
  email: 'Please enter a valid email',
};

type ShowTermsInfo = 'toc' | 'privacy-policy' | null;

const ContactForm = React.forwardRef((_, ref: any) => {
  var classNames = require('classnames');
  const [showTermsInfo, setShowTermsInfo] = useState<ShowTermsInfo>(null);

  const defaultForm: ContactForm = {
    name: '',
    email: '',
    course: '',
    message: '',
    agreedToTerms: false,
    isButtonDisabled: false,
    helperText: '',
    isError: false,
    isSuccess: false,
    isSubmitting: false,
  };
  const [form, setForm] = useState(defaultForm);

  const reRef = useRef<ReCAPTCHA>();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.name.length != 0 && form.agreedToTerms == true) {
      setForm({ ...form, isSubmitting: true });
      // Generate Recaptcha token
      let token = await reRef.current.executeAsync();
      // Reset token for subsequent submission if attempt fails
      reRef.current.reset();

      let data: ContactFormSubmitData = {
        name: form.name,
        email: form.email,
        course: form.course,
        message: form.message,
        agreedToTerms: form.agreedToTerms,
        token: token,
      };

      let resp = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const respData: ContactFormResponse = await resp.json();

      if (respData.success) {
        setForm({
          ...defaultForm,
          isError: false,
          isSuccess: true,
          isSubmitting: false,
          helperText: `I received your information and I'll be in touch with you shortly via email. Thanks!`,
        });
      } else {
        setForm({
          ...form,
          isError: true,
          isSuccess: false,
          isSubmitting: false,
          helperText:
            'There was a problem submitting the form. I apologize for that. Please Contact me via phone or email or try again later.',
        });
      }
    }
  };

  const handleChange: React.FormEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center my-6 px-3" ref={ref}>
        Request a Free Consultation
      </h2>

      <form className="w-full max-w-xl mx-auto px-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="course"
            >
              Class
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
              placeholder="Enter class name or topic"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              name="message"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Additional Message (optional)"
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap my-2 justify-center">
          <span className="text-center">
            <input
              id="termsOfService"
              type="checkbox"
              checked={form.agreedToTerms}
              onChange={(e) => {
                setForm({ ...form, agreedToTerms: e.target.checked });
              }}
            />{' '}
            <label htmlFor="termsOfService">
              I have read and agree to the{' '}
              <a
                className="underline cursor-pointer hover:text-blue-600"
                onClick={() => setShowTermsInfo('privacy-policy')}
              >
                Privacy Policy
              </a>
              &nbsp;and the&nbsp;
              <a
                className="underline cursor-pointer hover:text-blue-600"
                onClick={() => setShowTermsInfo('toc')}
              >
                Terms and Conditions
              </a>
            </label>
          </span>
        </div>
        {showTermsInfo && (
          <FormInfoBox onClose={() => setShowTermsInfo(null)}>
            {showTermsInfo === 'toc' && <TermsAndConditions />}
            {showTermsInfo === 'privacy-policy' && <PrivacyPolicy />}
          </FormInfoBox>
        )}
        <div className="w-full flex flex-row justify-center border-gray-600 border-solid border-opacity-50 py-4 ">
          {form.isSubmitting == false && (
            <input
              type="submit"
              value="Submit"
              disabled={
                form.name.length === 0 &&
                form.agreedToTerms == false &&
                form.email.length === 0
              }
              className={`font-bold text-white px-6 py-2 rounded-sm w-full mr-6 ${
                form.name.length !== 0 &&
                form.agreedToTerms &&
                form.email.length !== 0
                  ? 'cursor-pointer bg-blue-500 hover:bg-blue-dark focus:bg-blue-700 focus:border-white'
                  : 'cursor-not-allowed bg-blue-200'
              }`}
            />
          )}

          {form.isSubmitting && (
            <button
              type="button"
              className="font-bold text-white px-6 py-2 rounded-sm w-full  mr-6 bg-blue-300 cursor-wait"
              disabled
            >
              <Spinner />
            </button>
          )}

          {form.isSubmitting == false && (
            <input
              value="Cancel"
              type="button"
              onClick={() => {
                setForm(defaultForm);
              }}
              className={
                'font-bold px-6 py-2 rounded-sm w-full ml-6 bg-white text-gray-800 border border-gray-500 focus:border-gray-500 hover:bg-gray-200 hover:shadow-sm cursor-pointer'
              }
            />
          )}
        </div>
        {form.isSuccess && (
          <div
            className="bg-white border-l-4 border-green-500 text-green-700 p-4"
            role="alert"
          >
            <p className="font-bold">Information Submitted Successfully</p>
            <p>{form.helperText}</p>
          </div>
        )}

        {form.isError && (
          <div
            className="bg-white border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p className="font-bold">Something Went Wrong</p>
            <p>{form.helperText}</p>
          </div>
        )}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reRef}
        />
      </form>
    </>
  );
});

export default ContactForm;
