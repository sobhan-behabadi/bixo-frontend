import {useQuery} from "@tanstack/react-query";
import api from "../../api/api";


const useGetPostAdmin = () => {

    const {data, isPending, error, isError,refetch} = useQuery({
        queryKey: ['admin-getPost'],
        queryFn: async () => {
            return await api.get('/admin/getpost')
        },
        staleTime: 100,
    })

    return {data, isPending, isError, error,refetch}

}

export default useGetPostAdmin;