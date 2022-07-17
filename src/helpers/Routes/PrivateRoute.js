import { Navigate, Outlet } from "react-router";
import { userLoggedIn } from "../Auth";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return userLoggedIn() ? <Outlet /> : <Navigate to='/account/register' />; 
}