import {useMutation} from "@tanstack/react-query";
import api from "../api/api";


const useAddBalance = (addblc) => {


    const result = useMutation({
        mutationKey: ["addBalance"],
        mutationFn: async () => {
            return await api.post('/user/addbalance', {addBalance: addblc});
        },
        onSuccess: (data, variables, context) => {
            console.log('charged : ', data.data.data);
        },


    })
    return result;


}

export default useAddBalance;