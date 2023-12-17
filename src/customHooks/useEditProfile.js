import {useMutation} from "@tanstack/react-query";
import api from "../api/api";


const useEditProfile = () => {

    return useMutation({
        mutationKey: ['edit-profile'],
        mutationFn: async (pw) => {
            const res = await api.post('/user/editprofile', {password: pw})
            return res.data;
        },
    })

}

export default useEditProfile;