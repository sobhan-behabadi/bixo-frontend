import {useQuery} from "@tanstack/react-query";
import api from "../api/api";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/Store";


const useGetSignal = () => {


    const {data, isError, error, isPending} = useQuery({
        queryKey: ['getSignal'],
        queryFn: async () => {
            return await api.get('/user/getSignal');
        },
        staleTime: 2000,

    });


    return {data, isError, isPending, error}

}

export default useGetSignal;