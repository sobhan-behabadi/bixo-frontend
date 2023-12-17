import useGetPostAdmin from "../../../../customHooks/admin/useGetPostAdmin";
import Error from "../../../loading-erorr-and/Error";
import Loading from "../../../loading-erorr-and/Loading";
import OnePost from "./OnePost";
import useDeletePost from "../../../../customHooks/admin/useDeletePost";
import {useEffect, useState} from "react";

const DeletePostForm = () => {

    const [show, setShow] = useState(false)
    const {data, isPending, isError, refetch} = useGetPostAdmin()

    // useEffect(() => {
    //     if (data) {
    //         setAllPost(data.data.data)
    //     }
    // }, [data,allPost]);

    console.log(data?.data.data)

    const handleShow = () => {
        setShow(true);
        refetch()
    }

    return (

        isPending ? <Loading/> :
            isError ? <Error/> :
                data ? (
                    <div className={'col-12'}>
                        <div className="m-3">
                            {
                                show ?
                                    data.data.data.map((item, index) => (
                                        <OnePost key={index} id={item._id} title={item.title} link={item.link}/>
                                    )) :
                                    <div className={'d-flex justify-content-center'}>
                                        <button className={'btn btn-primary'} onClick={handleShow}>
                                            Show Post For Delete
                                        </button>
                                    </div>
                            }
                        </div>

                    </div>
                ) : null


    )
}

export default DeletePostForm;