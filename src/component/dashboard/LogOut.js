import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {login, logout} from "../../redux/Store";
import {useDispatch} from "react-redux";
import {useQueryClient} from "@tanstack/react-query";

const LogOut = () => {

    // const navigate = useNavigate()
    const dispatch = useDispatch();
    // const queryClient = useQueryClient();


    useEffect(async () => {
        localStorage.removeItem('token');
        // await queryClient.invalidateQueries('auth');
        dispatch(logout());
        // navigate('/')
        window.location = '/login';
    }, [])


    return null


}

export default LogOut;