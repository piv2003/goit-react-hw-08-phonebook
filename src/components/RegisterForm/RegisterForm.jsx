import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { register } from 'redux/auth/operations';

import {
  ErrorMessageText,
  Container,
  Label,
  Text,
  Input,
  FormBox,
  SubmitButton,
  Title,
} from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const userSchema = object({
  name: string()
    .required('Name is required')
    .min(2, 'Too Short!')
    .max(25, 'Too Long!'),
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
  );
};

export default RegisterForm;
