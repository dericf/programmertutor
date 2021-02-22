// React
import React, { useEffect } from 'react';
// Next
import Head from 'next/head';
import Link from 'next/link';
// Components
import { Divider } from '@/components/Divider';
import {PrivacyPolicy} from '../components/PrivacyPolicy'

export default function PrivacyPolicyPage({ content }) {
  return (
    <>
      <Head>
        <title>Privacy Policy | Programmer Tutor</title>
      </Head>
      <h1 className="pt__title text-center text-4xl sm:text-5xl lg:text-6xl mt-12">
        Privacy Policy
      </h1>
      <h2 className="pt__subtitle text-center text-lg md:text-2xl mb-8">
        Last Updated: October 17, 2020
      </h2>
      <Divider />

      <PrivacyPolicy />
    </>
  );
}
