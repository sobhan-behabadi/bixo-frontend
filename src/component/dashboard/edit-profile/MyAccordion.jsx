import ProfileAccordion from "./ProfileAccordion";
import PasswordAccordion from "./PasswordAccordion";
import {Accordion} from "react-bootstrap";

const MyAccordion = () => {

    return (
        <Accordion defaultActiveKey="0">
            <ProfileAccordion header={'profile'}/>
            <PasswordAccordion header={'Change Password'}/>
        </Accordion>

    )

}

export default MyAccordion;