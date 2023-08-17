import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { filterListContacts } from '../redux/filrer/selectors';

export const useContacts = () => {};
