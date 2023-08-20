import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { register } from '../../redux/auth/operations';

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
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <FormBox autoComplete="off">
          <Title>Registration</Title>
          <Label>
            <Text>
              <FaUserAlt size={20} /> Name
            </Text>
            <Input placeholder="Please enter a name" type="text" name="name" />
            <ErrorMessage component={ErrorMessageText} name="name" />
          </Label>
          <Label>
            <Text>
              <TfiEmail size={20} />
              Email
            </Text>
            <Input
              placeholder="Please enter email address"
              type="text"
              name="email"
            />
            <ErrorMessage component={ErrorMessageText} name="email" />
          </Label>
          <Label>
            <Text>
              <RiLockPasswordLine size={20} />
              Password
            </Text>
            <Input
              placeholder="Please enter password"
              type="password"
              name="password"
            />
            <ErrorMessage component={ErrorMessageText} name="password" />
          </Label>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </FormBox>
      </Formik>
    </Container>
  );
};

export default RegisterForm;
