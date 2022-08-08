import React from "react";
import {Container, Row} from "react-bootstrap";
import Contact from "./Contact";

function Contacts(props) {
	return (
    <Container>
		  <Row>
			  {props.contactInfo.map((item, index) => 
                { return <Contact contactInfo={item} key={index}/>}
                )
              }
		  </Row>
    </Container>
	);
}

export default Contacts;