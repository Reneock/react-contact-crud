import React, { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import IonIcon from "@reacticons/ionicons";
import EditContact from "./EditContact";
import {connect} from "react-redux";
import {deleteContact} from "../actions/contactActions";
import {doc, deleteDoc} from "firebase/firestore";
import {db} from "../firebase/Config";

function Contact(props) {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//const dispatch = useDispatch();

	const handleDelete = async (e) => {
		e.preventDefault();
		//dispatch(deleteContact(props.contactInfo.id));
		try{
			await deleteDoc(doc(db, "contacts", props.contactInfo.id));
		}
		catch(e){
			console.log(e)
		}
	};

	return (
		<>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditContact contactInfo={props.contactInfo} editContact={props.editContact} closeModal={handleClose} />
				</Modal.Body>
			</Modal>

			<Col md="4" style={{ marginBottom: "1rem" }}>
				<Card style={{ backgroundColor: "#9932cc", color: "white" }}>
					<Card.Body>
						<Card.Title style={{ color: "black" }}>CONTACT DETAILS</Card.Title>
						<Card.Title>{props.contactInfo.name} </Card.Title>
						<Card.Text><p>Phonenumber: {props.contactInfo.phonenumber}</p></Card.Text>
						<Card.Text><p>Location: {props.contactInfo.location}</p></Card.Text>
						<Button style={{ marginLeft: "10px", width: "75px" }} href="#" variant="success" onClick={handleShow}>
							<IonIcon name="create-outline" />
						</Button>
						<Button style={{ marginLeft: "20px", width: "75px" }} href="#" variant="danger" onClick={handleDelete}>
							<IonIcon name="trash-outline" />
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

const mapDispatchToProps = {deleteContact,}

export default connect (null, mapDispatchToProps) (Contact);