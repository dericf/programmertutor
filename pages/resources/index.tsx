import { Divider } from '@/components/Divider';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { IntroCards } from '@/components/IntroCards';
import { ServicesDescription } from '@/components/ServicesDescription';

import React, { useEffect } from 'react';
import sanity from '../../lib/sanityClient';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import { contentQuery } from '../../data/queries';

import Resources from '@/components/ResourcesMain';
import { NextPage } from 'next';

const ResourcesPage: NextPage = () => {
  const contactFormRef = React.createRef();

  return (
    <>
      <Head>
        <title>Programmer Tutor | Programmer Resources and References</title>
      </Head>
      {/* <Divider /> */}
      <Resources />
    </>
  );
};

export default ResourcesPage;
