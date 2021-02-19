import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const Layout = ({ content, ...props }) => {
  return (
    <>
      <NavBar />
      <div className="pt__main_container mt-16  bg-white mx-auto p-0 m-0">
        {props.children}
      </div>
      <Footer content={content} />
    </>
  );
};
