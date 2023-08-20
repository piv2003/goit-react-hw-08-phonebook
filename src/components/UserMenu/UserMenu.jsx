import { useDispatch } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserName, Wrapper, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>
        <FaUserCircle size={25} />
        Welcome, {user.name}
      </UserName>
      <Button type="button" onClick={onLogOut} alt="Quit">
        <BiLogOut size={23} />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
