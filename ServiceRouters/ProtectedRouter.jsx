import React from 'react'
import { Navigate} from 'react-router-dom'

const ProtectedRouter = ({children}) => {
  if(localStorage.getItem("token")){
    return(
        <div>{children}</div>
    )
  }
  else{return(
        alert( "Please login to access page"),
        <Navigate to="/"/>
  )
  }
  
}

export default ProtectedRouter