import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import './App.css';

function App() {
	const [contacts, setContacts] = useState([
		{ name: "Kwame Mens", phonenumber: "0243786321", location: "Accra" },
		{ name: "Abena John", phonenumber: "0509876310", location: "Koforidua" },
		{ name: "Kweku Sark", phonenumber: "0263337730", location: "Nalerigu" }
	]);

	const addNewContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	return (
    <>
		  <Container fluid  style={{marginTop: "2rem"}}>
			  <Row>
				  <Col md="4">
					  <ContactsForm newContact={addNewContact} />
				  </Col>
				  <Col>
					  <Contacts contactInfo={contacts} />
				  </Col>
			  </Row>
		  </Container>
    </>
	);
}

export default App;
