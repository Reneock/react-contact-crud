import React from "react";
import {Container, Row} from "react-bootstrap";
import Contact from "./Contact";

function Contacts(props) {
	return (
    <Container>
		  <Row>
			  {props.contactInfo.map((item) => 
          { return <Contact contactInfo={item} key={item.id} deleteContact={props.deleteContact} editContact={props.editContact}/>
          }
         )
        }
		  </Row>
    </Container>
	);
}

export default Contacts;