import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  TitleWrapper,
  Container,
  ButtonRegistr,
  ButtonLogIn,
} from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>

      {!isLoggedIn ? (
        <TitleWrapper>
          <Container>
            <span>Welcome, please</span>
            <NavLink to="/register">
              <ButtonRegistr>Register</ButtonRegistr>
            </NavLink>
            <span>or</span>
            <NavLink to="/login">
              <ButtonLogIn>Log in</ButtonLogIn>
            </NavLink>{' '}
            <span>to use the Phonebook</span>
          </Container>
        </TitleWrapper>
      ) : (
        <TitleWrapper>
          <Container>
            Please go to {<Link to="/contacts">Contacts</Link>} to use the app
          </Container>
        </TitleWrapper>
      )}
    </>
  );
};

export default Home;
