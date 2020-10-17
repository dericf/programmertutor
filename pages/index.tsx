import { Divider } from '@/components/Divider';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { IntroCards } from '@/components/IntroCards';
import { ServicesDescription } from '@/components/ServicesDescription';
import { TopContactIcons } from '@/components/TopContactIcons';
import React, { useEffect } from 'react';
import sanity from '../lib/sanityClient';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import { contentQuery } from '../data/queries';

export default function Home({ content, services }) {
  const contactFormRef = React.createRef();

  return (
    <>
      <Head>
        <title>Programmer Tutor | Fair. Flexible. Patient.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="pt__main_container md:container bg-white mx-auto p-0 m-0">
        <TopContactIcons />

        <Hero content={content} ref={contactFormRef} />

        {/* <Divider /> */}

        <IntroCards content={content} />

        <Divider />

        <ServicesDescription content={content} />
        <Divider />
        <ContactForm ref={contactFormRef} />
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const content = await sanity.fetch(contentQuery);
  return {
    props: { content }, // will be passed to the page component as props
  };
};
