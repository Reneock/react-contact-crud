import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {addContact} from '../actions/contactActions';
import {connect} from 'react-redux';
import {v4 as uuid} from "uuid";

function ContactsForm(props) {
	const [name, setName] = useState("");
	const [phonenumber, setPhonenumber] = useState("");
	const [location, setLocation] = useState("");

	const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addNewContact({id: uuid(), name, phonenumber, location});
		console.log ({id: uuid(), name, phonenumber, location});
		setName("");
		setPhonenumber("");
		setLocation("");
	};

	return (
		<Form style={{border:"1px solid purple", backgroundColor: "purple", color: "white", height: "350px"}}>
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

const mapDispatchToProps =  {
  addNewContact: addContact,
};

export default connect (null, mapDispatchToProps) (ContactsForm);