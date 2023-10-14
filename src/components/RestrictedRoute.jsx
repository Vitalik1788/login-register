import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
