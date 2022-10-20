import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import './App.css';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/Config";
import {addContact} from "./actions/contactActions";
import {useDispatch} from "react-redux";

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
    //the readData function can be ignored in this instance
    const readData = async () => {
      const q = query(collection(db, "contacts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const contacts = [];
        querySnapshot.forEach((doc) => {
          contacts.push(doc.data());
        });
        dispatch(addContact(contacts));
        console.log(contacts);
      });
    };
    readData();
  }, []);

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
