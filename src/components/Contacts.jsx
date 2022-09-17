import React from "react";
import {Container, Row} from "react-bootstrap";
import Contact from "./Contact";
import { connect } from 'react-redux';

function Contacts(props) {
	return (
    <Container>
		  <Row>
			  {props.contactsData.map((item) => 
          { return <Contact contactInfo={item} key={item.id} deleteContact={props.deleteContact} editContact={props.editContact}/>
          }
         )
        }
		  </Row>
    </Container>
	);
}

const mapStateToProps = (state) => {
    return {
      contactsData: state.contacts,
    };
};

export default connect(mapStateToProps) (Contacts);