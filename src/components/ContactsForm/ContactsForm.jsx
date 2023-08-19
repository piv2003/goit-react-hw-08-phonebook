import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { userSchema } from '../../services/userSchema';
import {
  FormBox,
  InputName,
  InputTel,
  Button,
  FormikWrapper,
  Message,
} from './ContactsForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactsForm = ({ onSubmit }) => {
  function handleSubmit({ name, number }, { resetForm }) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <FormikWrapper
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
          <InputName
            placeholder="Enter contact name.."
            type="text"
            name="name"
          />
          <ErrorMessage component={Message} name="name" />
        </label>
        <label>
          <span>Phone</span>
          <InputTel
            placeholder="Enter contact phone.."
            type="tel"
            name="number"
          />
          <ErrorMessage component={Message} name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </FormikWrapper>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;
