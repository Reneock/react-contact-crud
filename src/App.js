import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import './App.css';

function App() {
	const [contacts, setContacts] = useState([]);

	const addNewContact = (contact) => {
		contact.id = Math.random().toString();
		setContacts([...contacts, contact]);
	};

	const deleteContact = (id, deletedContact) => {
		setContacts(contacts.filter(contact => contact.id === id ? deletedContact : contact))
	};

	const editContact = (id, updatedContact) => {
		setContacts(contacts.map(contact => contact.id === id ? updatedContact : contact))
	};

	return (
    <>
		  <Container fluid  style={{marginTop: "2rem"}}>
			  <Row>
				  <Col md="4">
					  <ContactsForm newContact={addNewContact} />
				  </Col>
				  <Col>
					  <Contacts contactInfo={contacts} deleteContact={deleteContact} editContact={editContact}/>
				  </Col>
			  </Row>
		  </Container>
    </>
	);
}

export default App;
