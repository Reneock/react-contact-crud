import React from "react";
import {Col, Card, Button} from "react-bootstrap";
import IonIcon from "@reacticons/ionicons";

function Contact(props) {
	return (
		<Col md="4" style={{marginBottom: "1rem"}}>
			<Card style={{backgroundColor:"blue", color:"white"}}>
				<Card.Body>
          <Card.Title style={{color: "black"}}>CONTACT DETAILS</Card.Title>
					<Card.Title>{props.contactInfo.name} </Card.Title>
					<Card.Text><p>Phonenumber: {props.contactInfo.phonenumber}</p></Card.Text>
					<Card.Text><p>Location: {props.contactInfo.location}</p></Card.Text>
					<Button style={{marginLeft:"10px", width: "75px"}} href="#" variant="success">
          <IonIcon name="create-outline"/>
					</Button>
					<Button style={{marginLeft:"20px", width: "75px"}} href="#" variant="danger">
          <IonIcon name="trash-outline"/>
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Contact;