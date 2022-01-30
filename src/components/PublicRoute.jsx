import { Route } from 'react-router-dom';

export default function PublicRoute({ children, ...routeProps }) {
  console.dir(routeProps);
  return <Route {...routeProps}>{children}</Route>;
}
