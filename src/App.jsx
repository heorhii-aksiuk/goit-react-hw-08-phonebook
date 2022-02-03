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
import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from './store/auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Switch>
            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegisterPage />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </>
  );
}
