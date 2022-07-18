import { Navigate } from "react-router-dom";
import { userLoggedIn } from '../../helpers/Auth';

export const PublicRoute = ({children}) => {
    return userLoggedIn() ? <Navigate to='/' /> : children
}