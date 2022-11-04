import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function ProtectedRoute({children, authContacts}) {
  if (!authContacts) return <Navigate to="/login" replace={true} />;
  return children;
}

const mapStateToProps =(state)=>{
  return{
    authContacts: state.authReducer.logInContacts,
  }
}

export default connect (mapStateToProps) (ProtectedRoute);