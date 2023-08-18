import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { logIn } from '../../redux/auth/operations';
import {
  ErrorMessageText,
  Container,
  Label,
  Text,
  Input,
  FormBox,
  SubmitButton,
  Title,
} from './LoginForm.styled';


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    
  );
};

export default LoginForm;