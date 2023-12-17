import {Accordion as Accordions, Card, Button, Accordion} from 'react-bootstrap';
import ChangePassword from "./ChangePassword";


const PasswordAccordion = ({header}) => {


    return (
        <Accordion.Item eventKey="2">
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                <ChangePassword/>
            </Accordion.Body>
        </Accordion.Item>
    )
}
export default PasswordAccordion;