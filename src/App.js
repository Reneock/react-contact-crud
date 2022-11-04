import React, {useEffect} from "react";
import './App.css';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "./firebase/Config";
import {addContact} from "./actions/contactActions";
import {useDispatch} from "react-redux";
import Routing from "./Routing";
import {LogInContact} from "./actions/authAction";
import {onAuthStateChanged} from "firebase/auth";

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
    //the readData function can be ignored in this instance
    const readData = async () => {
      const q = query(collection(db, "contacts"), orderBy("name", "asc"));
      onSnapshot(q, (querySnapshot) => {
        const contacts = [];
        querySnapshot.forEach((doc) => {
          contacts.push(doc.data());
        });
        dispatch(addContact(contacts));
        console.log(contacts);
      });
    };
    readData();
  }, [dispatch]);

  useEffect (()=>{
    onAuthStateChanged(auth, (contact)=>{

      if (contact)dispatch(LogInContact(contact));
      else {dispatch(LogInContact(null));}

    })
  }, [dispatch]);

	return (
    <>
		  <Routing/>
    </>
	);
}

export default App;
