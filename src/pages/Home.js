import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Contacts from "../components/Contacts";
import ContactsForm from "../components/ContactsForm";
import {signOut} from "firebase/auth";
import {auth} from "../firebase/Config";

function Home() {

  const SignOut = async (e) => {
    e.preventDefault();
    try{
      signOut(auth)
    }
    catch(e)
    {
      console.log(e)
    }
  }

  return (
    <div>
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col md="4">
            <ContactsForm />
          </Col>
          <Col>
            <Contacts />
          </Col>
          <Button variant="danger" onClick={SignOut}>Logout</Button>
        </Row>
      </Container>
    </div>
  )
}

export default Home;