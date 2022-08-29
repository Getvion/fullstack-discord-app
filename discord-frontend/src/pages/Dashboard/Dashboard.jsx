import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/system';

import { getUserData, logout } from '../../store/auth/authSlice';

import { SideBar, FriendsSideBar, Messenger, AppBar } from '.';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});

export const Dashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (!userData) dispatch(logout());
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};
