import Head from 'next/head';
import Resources from '@/components/ResourcesMain';
import { NextPage } from 'next';

const ResourcesPage: NextPage = () => {

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
