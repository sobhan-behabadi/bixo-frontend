import {useMutation} from "@tanstack/react-query";
import api from "../../api/api";


const useDeleteUser = () => {


    return useMutation({
        mutationKey: ['admin-deleteUser'],
        mutationFn: async (email) => {
            return await api.delete('/admin/deleteuser', {data: {email: email}})
        }
    })


}

export default useDeleteUser;