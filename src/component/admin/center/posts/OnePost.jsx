import useDeletePost from "../../../../customHooks/admin/useDeletePost";
import {useFormik} from "formik";
import {useQueryClient} from "@tanstack/react-query";
import Loading from "../../../loading-erorr-and/Loading";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const OnePost = ({link, id, title}) => {


    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleSetPost = () => navigate('/admin/set-post');
    const handleSeePost = () => navigate('/dashboard/see-post');

    const deletePost = useDeletePost()
    const queryClient = useQueryClient();
    const formik = useFormik({
        initialValues: {
            id: id
        },
        onSubmit: async (values) => {
            console.log(values.id)
            deletePost.mutate(values.id)
            setShow(true);
            // await queryClient.invalidateQueries('admin-getPost');
        }
    })
    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <div className={'d-flex justify-between mb-3 border-b-2 border-b-gray-800 py-1'}>
                    <input defaultValue={formik.values.id} value={formik.values.id} className='d-none'/>
                    <h6 className={'align-self-center my-auto'}>{title}</h6>
                    <h6 className={'align-self-center my-auto'}>{link}</h6>
                    <button className={'btn btn-danger'}>Delete</button>
                </div>
            </form>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {
                            deletePost.isPending ? <Loading/> :
                                deletePost.isError ?
                                    <div className="d-flex justify-content-center">
                                        <h6 className={'alert alert-danger'}>Error, try again later</h6>
                                    </div>
                                    :
                                    deletePost.isSuccess ?
                                        <div className="d-flex justify-content-center">
                                            <h6 className={'alert alert-success'}>success, Deleted</h6>
                                        </div>
                                        : null
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSetPost}>
                        Go to set post
                    </Button>
                    <Button variant="primary" onClick={handleSeePost}>
                        See all post
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*<div>*/}
            {/*    {*/}
            {/*        deletePost.isPending ? <Loading/> :*/}
            {/*            deletePost.isError ?*/}
            {/*                <div className="d-flex justify-content-center">*/}
            {/*                    <h6 className={'alert alert-danger'}>Error, try again later</h6>*/}
            {/*                </div>*/}
            {/*                :*/}
            {/*                deletePost.isSuccess ?*/}
            {/*                    <div className="d-flex justify-content-center">*/}
            {/*                        <h6 className={'alert alert-success'}>success, Deleted</h6>*/}
            {/*                    </div>*/}
            {/*                    : null*/}
            {/*    }*/}
            {/*</div>*/}
        </>

    )
}

export default OnePost;