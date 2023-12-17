import useGetUsersAdmin from "../../../../customHooks/admin/useGetUsersAdmin";
import Loading from "../../../loading-erorr-and/Loading";
import Error from "../../../loading-erorr-and/Error";
import {useState} from "react";
import useDeleteUser from "../../../../customHooks/admin/useDeleteUser";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Users = () => {

    const [show, setShow] = useState(false);
    const [del, setdel] = useState('');
    const {data, isPending, isError} = useGetUsersAdmin();

    const dlt = useDeleteUser();

    const handleClose = () => {
        setShow(false)
    }

    const handleDlt = () => {
        console.log(del)
        dlt.mutate(del)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true)
        // let email = e.currentTarget[0].value
        setdel(e.currentTarget[0].value);


    }

    return (
        <div className="container">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        dlt.isPending ? <Loading/> :
                            dlt.isError ? <h6 className={'alert alert-danger'}>Error, try again Later</h6> :
                                dlt.isSuccess ? <h6 className={'alert alert-success'}>success, Deleted</h6> :
                                    <h6>Are you sure to delete the user?</h6>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleDlt}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="row">
                <div className="col">
                    {isPending ? (
                        <Loading/>
                    ) : isError ? (
                        <Error/>
                    ) : data ? (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Balance</th>
                                    <th scope="col">Admin</th>
                                    <th scope="col">Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data?.data.data.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.balance}</td>
                                        <td>
                                            {user.isAdmin ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={3}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            ) : null}
                                        </td>
                                        <td>
                                            <form onSubmit={handleSubmit}>
                                                <input className='d-none' id={'delete'} name={'delete'}
                                                       value={user.email}/>
                                                <button className={'btn btn-danger'}>Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Users;
