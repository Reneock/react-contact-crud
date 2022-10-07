import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import './App.css';

function App() {

	return (
    <>
		  <Container fluid  style={{marginTop: "2rem"}}>
			  <Row>
				  <Col md="4">
					  <ContactsForm />
				  </Col>
				  <Col>
					  <Contacts />
				  </Col>
			  </Row>
		  </Container>
    </>
	);
}

export default App;
