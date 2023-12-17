import {useMutation} from "@tanstack/react-query";
import api from "../../api/api";


const useDeletePost = () => {

    return useMutation({
        mutationKey: ['admin-deletePost'],
        mutationFn: async (id) => {
            return await api.delete(`admin/deletepost/${id}`)
        }
    })


}

export default useDeletePost;