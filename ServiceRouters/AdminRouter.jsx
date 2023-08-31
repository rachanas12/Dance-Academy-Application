import React from 'react'

const AdminRouter = ({children}) => {
  if(localStorage.getItem("role")==="ROLE_ADMIN"){
return(
    <div>{children}</div>
)
  }
  else{
    alert("Only Admin can access")
  }
}

export default AdminRouter