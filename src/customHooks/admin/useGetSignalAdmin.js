import {useQuery} from "@tanstack/react-query";
import api from "../../api/api";


const useGetSignalAdmin = () => {

    const {data, isPending, error, isError} = useQuery({
        queryKey: ['admin-getSignal'],
        queryFn: async () => {
            return await api.get('/admin/getsignal')
        },
        staleTime: 5000,
    })

    return {data, isPending, isError, error}
}

export default useGetSignalAdmin;