# Programmer Tutor Website

[www.programmertutor.com](https://programmertutor.com)

## Overview

Built with NextJS on Vercel, Sanity Headless CMS, TailwindCSS, and SendGrid, programmertutor.com is a simple website where I display information about my tutoring services, some insight into what I can help students with, and a contact form where people can get ahold of me.

A single serverless function handles the submission of the contact form, and google recaptcha v2 handles human verification to prevent spam.

## Developing locally

1. Clone the repository
2. run `npm install` in the main directory
3. run `npm install` in the `/sanity` directory
4. define a `.env.local` file and add the following environment variables:
	```bash
	SENDGRID_API_KEY="<SENDGRID_API_KEY>"
	NEXT_PUBLIC_RECAPTCHA_SITE_KEY="<RECAPTCHA_SITE_KEY>"
	RECAPTCHA_SERVER_KEY="<RECAPTCHA_SERVER_KEY>"
	CONTACT_FORM_EMAIL_RECEIVER="deric@programmertutor.com"
	CONTACT_FORM_EMAIL_SENDER="deric@programmertutor.com"
	NODE_ENV="development"
	```
5. run next dev server with `npm run dev`
6. run the sanity server with `npm run start` from inside the `/sanity` directory
7. if major changes are being made, checkout the `dev` branch and make sure it is up to date with `master` by running `git checkout master && git rebase master`

## Deploy Changes to Vercel

Deploying is simple - all you need to do is commit changes and push to master and a new build/deployment will automatically be triggered.

## Latest Lighthouse Metrics

[![Programmer-Tutor-Lighthouse-Metrics.png](https://i.postimg.cc/FKWdtN53/Programmer-Tutor-Lighthouse-Metrics.png)](https://postimg.cc/Y4FqYcSC)