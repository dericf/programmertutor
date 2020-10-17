import { processEnv } from 'next/dist/lib/load-env-config';
import React, { useEffect, useState } from 'react';

type ContactForm = {
  name: string;
  email: string;
  course: string;
  message: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  isSuccess: boolean;
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
  const defaultForm: ContactForm = {
    name: '',
    email: '',
    course: '',
    message: '',
    isButtonDisabled: false,
    helperText: '',
    isError: false,
    isSuccess: false,
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    (window as any).grecaptcha.ready((_) => {
      (window as any).grecaptcha
        .execute('6LfNWNgZAAAAANv_nXCXGVtU0zfNHLEy---tKcb9', {
          action: 'contactForm',
        })
        .then((token) => {
          let data = {
            name: form.name,
            email: form.email,
            course: form.course,
            message: form.message,
            token: token,
          };
          console.log('CAPTCHA??!! HELLO?');
          fetch('/api/contact-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((resp) => resp.json)
            .then((json) => {
              console.log('RESPONSE: ', json);
              setForm({
                ...form,
                isError: false,
                isSuccess: true,
                helperText: `Success! I received your information. I'll be in touch with you shortly. Thanks!`,
              });
            })
            .catch((error) => {
              console.log('ERROR: ' + error);
              setForm({
                ...form,
                isError: true,
                helperText:
                  'There was a problem submitting the form. I apologize for that. Please Contact me via phone or email or try again later.',
              });
            });
        });
    });
  };

  const handleChange: React.FormEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="text-3xl text-center my-6">Book a Free Consultation</h2>

      <form className="w-full max-w-lg mx-auto " ref={ref}>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
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
              type="text"
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

        <div className="self-center md:self-start flex flex-row justify-around border-t border-b border-gray-600 border-solid border-opacity-50 py-4 ">
          <input
            type="button"
            value="Submit"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-md flex-grow-0 max-w-xs mr-6 self-center "
          />
          <input
            type="button"
            value="Cancel"
            className="bg-red-600 text-white px-6 py-2 rounded-md flex-grow-0 max-w-xs self-center"
            onClick={() => {
              setForm(defaultForm);
            }}
          />
          <div
            className="g-recaptcha"
            data-sitekey={process.env.RECAPTCHA_SITE_KEY}
            data-size="invisible"
          ></div>
        </div>
        {form.isError && (
          <p className="text-red-600 text-md italic py-4 mx-auto">
            {form.helperText}
          </p>
        )}

        {form.isSuccess && (
          <p className="text-gray-800 text-md italic py-4 mx-auto">
            {form.helperText}
          </p>
        )}
      </form>
    </>
  );
});

export default ContactForm;
