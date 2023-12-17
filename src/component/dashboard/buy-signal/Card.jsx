import useBuySignal from "../../../customHooks/useBuySignal";
import {useRef, useState} from "react";
import {json, useNavigate} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";

const Card = ({count, id, price, symbol, time}) => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const res = useBuySignal(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        res.mutate();
        setShow(true);

    }

    const handleClose = (e) => {
        e.preventDefault();
        setShow(false);

    }
    const handleCloseAndGo = (e) => {
        e.preventDefault();
        setShow(false);
        navigate('/dashboard/my-signal');
    }


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        res.isPending ? <h4>Loading</h4> :
                            res.isError ? <h4 className={'text-danger'}>{res.error.response.data.message}</h4> :
                                res.data ? <h4 className={'text-success'}>{res.data.message}</h4> : null
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAndGo}>
                        Go to my signal
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>

            <tr>
                <td>{count}</td>
                <td>{symbol}</td>
                <td>{time}</td>
                <td>{price}</td>
                <td>
                    <Button variant="primary" onClick={handleSubmit}>
                        Get
                    </Button>
                    {/*<button onClick={handleSubmit} className={'btn btn-outline-success'}>Get</button>*/}
                </td>
                {/*<td>*/}
                {/*    {*/}
                {/*        res.isPending ? <h6>Loading</h6> :*/}
                {/*            res.isError ? <h6>{res.error.response.data.message}</h6> :*/}
                {/*                res.data ? <h6>{res.data.message}</h6> : null*/}
                {/*    }*/}
                {/*</td>*/}

            </tr>
        </>


    )
}

export default Card;