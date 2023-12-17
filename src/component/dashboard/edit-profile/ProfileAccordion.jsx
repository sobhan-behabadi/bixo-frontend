import {Accordion} from 'react-bootstrap';
import useAuth from "../../../customHooks/useAuth";
import useGetSignal from "../../../customHooks/useGetSignal";


const ProfileAccordion = ({header}) => {

    const {data} = useAuth();
    const {data : signals} =useGetSignal();


    return (

        <Accordion.Item eventKey="1">
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                <div className="mb-3">
                    <h5>Name: <span className="badge bg-primary">{data?.data.data.name}</span></h5>
                </div>
                <div className="mb-3">
                    <h5>Email: <span className="badge bg-primary">{data?.data.data.email}</span></h5>
                </div>
                <div className="mb-3">
                    <h5>Balance: <span className="badge bg-primary">{data?.data.data.balance}</span></h5>
                </div>
                <div className="mb-3">
                    <h5>Signal: <span className="badge bg-primary">{signals?.data.data.length} signal</span></h5>
                </div>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default ProfileAccordion;