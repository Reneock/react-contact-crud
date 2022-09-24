import {v4 as uuid} from 'uuid';

let initialState = {
  contacts: [
    {name:"Isaac", phonenumber: "0244256739", location: "Accra", id: uuid(),},
    {name:"Adwoa", phonenumber: "0508923636", location: "Kumasi", id: uuid(),},
    {name:"Raman", phonenumber: "0263190825", location: "Tamale", id: uuid(),},
  ],
};



let contactReducer =(state=initialState, action)=>{
  switch(action.type){
	case "ADD_CONTACT":
    return {...state, contacts: [...state.contacts, action.payload] };

  case "EDIT_CONTACT":
    const editedInfo = state.contacts.map ((contact)=>{
      if (contact.id===action.payload.updatedContact.id){
          return action.payload.updatedContact;
        }
        else{return contact}
    })

    return {...state, contacts:editedInfo}

  case "DELETE_CONTACT":
    const unDeletedContacts = state.contacts.filter ((contact)=>contact.id!==action.payload)
    return {...state, contacts:unDeletedContacts}  

    default:
    return state
  }
};

export default contactReducer;