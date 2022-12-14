import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {editContact} from '../actions/contactActions';
import {connect} from "react-redux";

function EditContact (props) {
	const [name, setName] = useState(props.contactInfo.name);
	const [phonenumber, setPhonenumber] = useState(props.contactInfo.phonenumber);
	const [location, setLocation] = useState(props.contactInfo.location);
	//const [id, setId] = useState (props.contactInfo.id);

	const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

	const handleSubmit = (e) => {
		e.preventDefault();
		let newDetails = {id:props.contactInfo.id, name, phonenumber, location};
		props.editContact(newDetails);
		setName("");
		setPhonenumber("");
		setLocation("");
		props.closeModal();
	};

	return (
		<Form style={{border:"1px solid purple", backgroundColor: "#9932cc", color: "white", height: "350px"}}>
			<Form.Group className="mb-3" controlId="formBasicEmail" style={{width: "300px", marginTop:"20px", marginLeft:"50px"}}>
				<Form.Label>Name </Form.Label>
				<Form.Control type="name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail" style={{width: "300px", marginLeft:"50px"}}>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control type="number" value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value);}}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail" style={{width: "300px", marginLeft:"50px"}}>
				<Form.Label>Location</Form.Label>
				<Form.Control type="text" value={location} onChange={handleChange} />
			</Form.Group>

			<Button variant="primary" type="submit" onClick={handleSubmit} style={{marginTop:"15px", marginLeft: "150px", width: "100px"}} >
				Submit
			</Button>
		</Form>
	);
}

const mapDispatchToProps={
	editContact: editContact,
}

export default connect (null, mapDispatchToProps) (EditContact) ;