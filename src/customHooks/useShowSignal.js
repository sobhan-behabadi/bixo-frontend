import {useQuery} from "@tanstack/react-query";
import api from "../api/api";


const useShowSignal = () => {


    const {data, isPending, isError} = useQuery({
        queryKey: ['showSignal'],
        queryFn: async () => {
            return await api.get('/user/showSignal');
        },
        staleTime: 2000,
    })

    return {data, isPending, isError}

}

export default useShowSignal