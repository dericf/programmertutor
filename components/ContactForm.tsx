import { processEnv } from 'next/dist/lib/load-env-config';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

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

const ContactForm = React.forwardRef((_, ref: any) => {
  var classNames = require('classnames');

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

  const handleLoaded = (_) => {
    (window as any).grecaptcha.ready((_) => {
      console.log('recaptcha loaded!');
    });
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LfNWNgZAAAAANv_nXCXGVtU0zfNHLEy---tKcb9`;
    script.addEventListener('load', handleLoaded);
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.name.length != 0 && form.agreedToTerms == true) {
      setForm({ ...form, isSubmitting: true });
      (window as any).grecaptcha.ready(async (_) => {
        (window as any).grecaptcha
          .execute('6LfNWNgZAAAAANv_nXCXGVtU0zfNHLEy---tKcb9', {
            action: 'contactForm',
          })
          .then(async (token) => {
            let data = {
              name: form.name,
              email: form.email,
              course: form.course,
              message: form.message,
              agreedToTerms: form.agreedToTerms,
              token: token,
            };

            if (process.env.NODE_ENV == 'development') {
              setTimeout(() => {
                setForm({
                  ...defaultForm,
                  isSubmitting: false,
                  isError: false,
                  isSuccess: true,
                  helperText: `Development Version Enabled.`,
                });
              }, 2);
            } else {
              let resp = await fetch('/api/contact-form', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
              const respData: any = await resp.json();

              if (respData.success) {
                setForm({
                  ...defaultForm,
                  isError: false,
                  isSuccess: true,
                  isSubmitting: false,
                  helperText: `I received your information and I'll be in touch with you shortly via email. Thanks!`,
                });
              } else {
                console.log('ERROR: ');
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
          });
      });
    }
  };

  const handleChange: React.FormEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center my-6 px-3">
        Request a Free Consultation
      </h2>

      <form
        className="w-full max-w-lg mx-auto px-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              ref={ref}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              htmlFor="grid-class"
            >
              Class
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="course"
              value={form.course}
              onChange={handleChange}
              placeholder="Enter Class Name or Topic"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Message
            </label>
            <textarea
              rows={6}
              name="message"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Additional Message (optional)"
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <label>
            <input
              type="checkbox"
              checked={form.agreedToTerms}
              onChange={(e) => {
                setForm({ ...form, agreedToTerms: e.target.checked });
              }}
            />{' '}
            I have read and agree to the{' '}
            <Link href="/privacy-policy" as="/privacy-policy">
              <a className="underline cursor-pointer hover:text-blue-600">
                Privacy Policy
              </a>
            </Link>
            &nbsp;and the&nbsp;
            <Link href="/terms-and-conditions" as="/terms-and-conditions">
              <a className="underline cursor-pointer hover:text-blue-600">
                Terms and Conditions
              </a>
            </Link>
          </label>
        </div>

        <div className="w-full flex flex-row justify-center border-gray-600 border-solid border-opacity-50 py-4 ">
          {form.isSubmitting == false && (
            <input
              type="button"
              value="Submit"
              onClick={handleSubmit}
              disabled={form.name.length == 0 && form.agreedToTerms == false}
              className={`font-bold text-white px-6 py-2 rounded-sm w-full mr-6 ${
                form.name.length != 0 && form.agreedToTerms
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

          <div
            className="g-recaptcha"
            data-sitekey={process.env.RECAPTCHA_SITE_KEY}
            data-size="invisible"
          ></div>
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
      </form>
    </>
  );
});

export default ContactForm;
