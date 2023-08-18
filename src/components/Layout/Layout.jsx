import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Wrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
