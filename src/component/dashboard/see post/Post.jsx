import SinglePost from "./SinglePost";
import usePost from "../../../customHooks/usePost";
import Loading from "../../loading-erorr-and/Loading";
import Error from "../../loading-erorr-and/Error";

const Post = () => {

    const {data, isPending, isError} = usePost();

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {
                        isPending ? <Loading/> :
                            isError ? <Error/> :
                                data ?
                                    data?.data.data.map((item, index) => (
                                        <SinglePost data={item}/>
                                    )) : null
                    }
                </div>
            </div>
        </>
    )
}

export default Post