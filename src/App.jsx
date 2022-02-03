import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar/AppBar';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import authOperations from './store/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Switch>
        <PublicRoute exact path="/register">
          <RegisterPage />
        </PublicRoute>
        <PublicRoute exact path="/login">
          <LoginPage />
        </PublicRoute>
        <PrivateRoute exact path="/contacts">
          <ContactsPage />
        </PrivateRoute>
      </Switch>
    </>
  );
}
