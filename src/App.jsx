import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import AppBar from './components/AppBar/AppBar';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
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
