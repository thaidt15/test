import React from 'react';
import Login from '../page/Login/Login.jsx'
import UserList from '../page/headOfDepartment/UserList/UserList.jsx'
import { Navigate, Route } from 'react-router-dom';

export const CommonRouter = [
  { path: '/login', component: Login },
  { path: '/logout', component: Login },
  { path: '/hod/user-list', component: UserList }
];
export const HodRount = ({ path,
  authenticated,
  element }) => {
  if (authenticated) {
    return <Route path={path} element={element} />;
  } else {
    return <Route path={path} element={<Navigate to="/login" replace />} />;
  }
};




