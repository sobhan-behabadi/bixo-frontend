import {useMutation} from "@tanstack/react-query";
import api from "../../api/api";


const useEditSignal = () => {

    return useMutation({
        mutationKey: ['admin-editSignal'],
        mutationFn: async (data) => {
            return await api.post('admin/editsignal', data)
        }
    })

}

export default useEditSignal;