import {useMutation} from "@tanstack/react-query";
import api from "../../api/api";


const useSetNewPost = () => {

    return useMutation({
        mutationKey: ['admin-setPost'],
        mutationFn: async (post) => {
            return await api.post('admin/setpost', post)
        },
    })

}

export default useSetNewPost;