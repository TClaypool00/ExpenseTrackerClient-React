import { Navigate } from "react-router";
import { userLoggedIn } from "../Auth";

export const PrivateRoute = ({children}) => {
    return userLoggedIn() ? children : <Navigate to='/account/register' />
}