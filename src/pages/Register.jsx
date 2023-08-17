import { Helmet } from 'react-helmet';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { useAuth, useLoaders } from '../hooks';

const Register = () => {
  const { isLoading } = useAuth();
  const { LoaderBig } = useLoaders();

  return (
    );
};

export default Register;
