// React
import React, { useEffect } from 'react';
// Next
import Head from 'next/head';
import Link from 'next/link';
// Components
import { Divider } from '@/components/Divider';
import {TermsAndConditions} from '../components/TermsAndConditions'

export default function TermsAndConditionsPage({ content }) {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Programmer Tutor</title>
      </Head>
      <h1 className="pt__title text-center text-4xl sm:text-5xl lg:text-6xl mt-12">
        Terms and Conditions
      </h1>
      <h2 className="pt__subtitle text-center text-lg md:text-2xl mb-8">
        Last Updated: October 17, 2020
      </h2>

      <Divider />

      <TermsAndConditions />
    </>
  );
}
