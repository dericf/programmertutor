import ResourcesJS from './ResourcesJS';
import ResourcesPython from './ResourcesPython';
import Link from 'next/link';

const ResourcesMain = () => {
  return (
    <div className="mt-16 prose prose-md sm:prose-xl">
      <h2 className="text-lg md:text-3xl text-center my-6 px-3">
        Programmer Resources (By Language)
      </h2>
      <div className="flex flex-col px-4 py-6">
        <Link href="/resources/javascript" as="/resources/javascript">
          <a>JavaScript</a>
        </Link>
        <Link href="/resources/python" as="/resources/python">
          <a>Python</a>
        </Link>
      </div>
    </div>
  );
};

export default ResourcesMain;
