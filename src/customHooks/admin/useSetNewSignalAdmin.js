import {useMutation} from "@tanstack/react-query";
import api from "../../api/api";


const useSetNewSignalAdmin = () => {

    return useMutation({
        mutationKey: ['admin-setSignal'],
        mutationFn: async (sig) => {
            return await api.post('admin/setsignal', sig)
        },
    })
}

export default useSetNewSignalAdmin;