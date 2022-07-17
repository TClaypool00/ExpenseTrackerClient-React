import { Outlet, Navigate } from "react-router-dom";
import { userLoggedIn } from '../../helpers/Auth';

export const PublicRoute = ({component: Component, ...rest}) => {
    return userLoggedIn() ? <Navigate to='/' /> : <Outlet />
}