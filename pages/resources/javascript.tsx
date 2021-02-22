import Head from 'next/head';
import { NextPage } from 'next';
import ResourcesJS from '@/components/ResourcesJS';

const ResourcesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Programmer Tutor | Programmer Resources and References</title>
      </Head>
      {/* <Divider /> */}
      <ResourcesJS />
    </>
  );
};

export default ResourcesPage;
