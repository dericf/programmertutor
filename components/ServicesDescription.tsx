export const ServicesDescription: React.FC = () => {
  return (
    <article className="prose mt-12 px-10">
      <h2 className="text-center mb-6 text-3xl">What can I help you with?</h2>

      <section className="mb-4">
        <h4 className="text-xl font-bold">Programming Fundamentals</h4>
        <p className="">
          General programming concepts using various languages such as Python,
          JavaScript, C/C++/C#, Java, and more...
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-xl font-bold">Course Work and Exam Prep</h4>
        <p className="">
          If you need some help getting through a college class, weather its
          difficult assignments or quiz/exam prep, I can certainly help you. I
          won't do the work for you, but I can help you get to a point where you
          are able to do the work on your own.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-xl font-bold">Web Concepts and Web Frameworks</h4>
        <p className="">
          We can go over the basics of HTML, CSS and JavaScript, or we can dive
          into a framework like React, Next.JS or Vue.JS.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-xl font-bold">Database Design and Integration</h4>
        <p className="">
          Working with a database can be quite tricky. I can help you with your
          initial Design, writing SQL statements or GraphQL queries.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-xl font-bold">Version Control (Git/Github)</h4>
        <p className="">
          Understanding version control is vital to enhance productivity, reduce
          the chance of losing big chunks of code due to power outage,
          accidental deletion, etc. If you understand the concepts but are
          struggling to understand how to apply them to a real project, I can
          certainly help you with that.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-xl font-bold">
          Developer Tools and Environment Setup
        </h4>
        <p className="">
          If you're finding your workflow to be cumbersome and frustrating, or
          would like some help learning how to debug more efficiently, I can
          help with that.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-xl font-bold">Project Based Learning</h4>
        <p className="">
          If you'd like to learn by doing a whole project from start to finish,
          we can choose a language, get your environment and tooling set up, and
          work through a series of milestones. Sometimes building an app or a
          website is the best way to learn.
        </p>
      </section>
    </article>
  );
};
