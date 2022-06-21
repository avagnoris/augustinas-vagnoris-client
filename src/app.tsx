import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useRootSelector, useRootDispatch } from './store/hooks';
import { selectAuthLoading, selectAuthLoggedIn, selectAuthToken } from './store/selectors';
import { createAuthenticateActionThunk } from './store/action-creators';

import HomePage from './pages/home-page';
import TurkeyPage from './pages/turkey-page';
import GreecePage from './pages/greece-page';
import ItalyPage from './pages/italy-page';
import SpainPage from './pages/spain-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';
import ProfilePage from './pages/profile-page';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => {
  const location = useLocation();
  const token = useRootSelector(selectAuthToken);
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  if (!loggedIn && token) {
    if (!loading) {
      dispatch(createAuthenticateActionThunk(token, location.pathname));
    }
    return <div />;
  }

  return (
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<HomePage />} />
        <Route path="turkey" element={<TurkeyPage />} />
        <Route path="greece" element={<GreecePage />} />
        <Route path="italy" element={<ItalyPage />} />
        <Route path="spain" element={<SpainPage />} />
        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  );
};

export default App;
