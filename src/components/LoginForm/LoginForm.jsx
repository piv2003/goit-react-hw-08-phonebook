import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
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

const initialValues = {
  email: '',
  password: '',
};

const userSchema = object({
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
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
          <Title>Authorization</Title>
          <Label>
            <Text>
              <TfiEmail size={20} />
              Email
            </Text>
            <Input
              placeholder="Please enter your email address"
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
              placeholder="Please enter your password"
              type="password"
              name="password"
            />
            <ErrorMessage component={ErrorMessageText} name="password" />
          </Label>
          <SubmitButton type="submit">Log In</SubmitButton>
        </FormBox>
      </Formik>
    </Container>
  );
};

export default LoginForm;
