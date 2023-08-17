import { Helmet } from 'react-helmet';
import ContactsBar from '../components/ContactsBar/ContactsBar';
import { useAuth, useLoaders } from '../hooks';

const Contacts = () => {
  const { isLoading } = useAuth();
  const { LoaderBig } = useLoaders();

  return (
  );
};

export default Contacts;
