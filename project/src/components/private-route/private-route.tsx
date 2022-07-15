import { Navigate } from 'react-router-dom';
import { AppRoutes, Statuses } from '../const';

type PrivateRouteProps = {
  authStatus: Statuses,
  children: JSX.Element
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authStatus, children} = props;
  return (
    authStatus === Statuses.Auth
      ? children
      : <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
