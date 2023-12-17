import {useMutation} from "@tanstack/react-query";
import api from "../api/api";
import {useNavigate} from "react-router-dom";


const useRegister = (registerInfo) => {

    const navigate = useNavigate();

    return useMutation({
        mutationKey: ["authLogin"],
        mutationFn: async () => {
            return await api.post('/auth/register', registerInfo);
        },
        onSuccess: (data, variables, context) => {
            setTimeout(() => {
                navigate('/login');
            }, 2000)
        }

    });

}


export default useRegister;