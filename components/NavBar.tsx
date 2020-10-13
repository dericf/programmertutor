import { useAuth } from 'hooks/useAuth';

const NavBar: React.FC = () => {
  const auth = useAuth();

  return (
    <>
      <h1>Programmer Tutor</h1>
      <p>User: {auth.user ? auth.user.displayName : 'No User'} </p>
    </>
  );
};

export default NavBar;
