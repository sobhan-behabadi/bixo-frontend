import {useQuery} from "@tanstack/react-query";
import api from "../api/api";


const usePost = () => {


    const {data, isPending, isError, error} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            return await api.get('/user/getpost');
        },
        staleTime : 2000,
    })

    return {data, isPending, isError, error}


}

export default usePost;