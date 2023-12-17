import {useMutation, useQueryClient} from "@tanstack/react-query";
import api from "../api/api";
import {useNavigate} from "react-router-dom";
import useAuth from "./useAuth";


const useLogin = (loginInfo) => {

    const navigate = useNavigate();

    return useMutation({
        mutationKey: ["authLogin"],
        mutationFn: async () => {
            return await api.post('/auth/login', loginInfo);
        },
        onSuccess: (data, variables, context) => {
            setTimeout(async () => {
                localStorage.setItem('token', data.data.data.token);
                window.location = '/dashboard';
                // navigate('/dashboard')

            }, 1000)
        },

    });
}


export default useLogin;