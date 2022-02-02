import { Route } from 'react-router-dom';

export default function PublicRoute({ children, ...routeProps }) {
  return <Route {...routeProps}>{children}</Route>;
}
