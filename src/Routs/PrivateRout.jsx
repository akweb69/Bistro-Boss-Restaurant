import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Common/Loader";
import { Navigate } from "react-router-dom";

const PrivateRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRout;