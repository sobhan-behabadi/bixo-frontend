import {useQuery} from "@tanstack/react-query";
import api from "../api/api";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/Store";


const useAuth = () => {

    // const dispatch = useDispatch();
    // const selector = useSelector((state) => state.user);

    const {data, isFetching, fetchStatus, status, refetch, isPending, isError, error} = useQuery({
        queryKey: ['auth'],
        queryFn: async () => {
            return await api.get('/user');
        },
        staleTime: 2000,
        cacheTime: 2000,

    });


    return {data, isPending, refetch}

}

export default useAuth;