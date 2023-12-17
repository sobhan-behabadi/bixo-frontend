import {useMutation} from "@tanstack/react-query";
import api from "../api/api";


const useBuySignal = (id) => {

    return useMutation({
        mutationKey: ['buySignal'],
        mutationFn: async () => {
            const res = await api.post('/user/buySignal', {id_signal: id})
            return res.data;
        },
    })
}


export default useBuySignal;