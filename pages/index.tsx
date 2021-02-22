import { Divider } from '@/components/Divider';
import { Footer } from '@/components/Footer';
import { HeroImage } from '@/components/HeroImage';
import { IntroCards } from '@/components/IntroCards';
import { ServicesDescription } from '@/components/ServicesDescription';

import React, { useEffect } from 'react';
import sanity from '../lib/sanityClient';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import { contentQuery, infoCardsQuery } from '../data/queries';

import { Layout } from '@/components/Layout';
import { MainTitle } from '@/components/MainTitle';

export default function Home({ content, infoCards }) {
  const contactFormRef = React.createRef();

  return (
    <Layout content={content}>
      <Head>
        <title>Programmer Tutor | Fair - Flexible - Patient</title>
        <meta name="description" content="Affordable Computer Science tutoring services. Free consultation."/>
      </Head>

      <MainTitle content={content} />
      <HeroImage content={content} ref={contactFormRef} />
      <IntroCards cards={infoCards} />

      {/* <Divider /> */}

      <Divider />

      <ServicesDescription services={content.services} />
      <Divider />
      <ContactForm ref={contactFormRef} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const content = await sanity.fetch(contentQuery);
  const infoCards = await sanity.fetch(infoCardsQuery);
  // console.log(infoCards)
  return {
    props: { content, infoCards }, // will be passed to the page component as props
    revalidate: 15,
  };
};
