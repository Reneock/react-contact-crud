let initialState = {
  contacts: [],
};



let contactReducer =(state=initialState, action)=>{
  switch(action.type){
	case "ADD_CONTACT":
    return {...state, contacts: [...state.contacts, action.payload] };

    default:
    return state
  }
};

export default contactReducer;