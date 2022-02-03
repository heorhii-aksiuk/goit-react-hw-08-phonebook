import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../store/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
