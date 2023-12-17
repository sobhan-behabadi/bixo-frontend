import {useQuery} from "@tanstack/react-query";
import api from "../../api/api";


const useGetUsersAdmin = () => {

    const {data, isPending, error, isError} = useQuery({
        queryKey: ['admin-getUser'],
        queryFn: async () => {
            return await api.get('/admin/getusers')
        },
        staleTime: 5000,
    })

    return {data, isPending, isError, error}
}

export default useGetUsersAdmin;