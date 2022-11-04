let initialState = {
  logInContacts : null

}

const authReducer = (state = initialState, action)=>{
  switch(action.type) {
    case "ADD_LOGINCONTACT":
    return {...state, logInContacts: action.payload}

    default : return state
  }

}

export default authReducer;