import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../helpers/axiosInstance'
import styles from"./login.module.css"

const Login = () => {
  let navigate=useNavigate()
  let [state,setState]=useState({
    userEmail:"",
    password:""
   })

   let {userEmail,password}=state

   let handleChange=(e)=>{
     // let {name,value}=e.target;
     let name=e.target.name
     let value=e.target.value
     setState({...state,[name]:value})

   }
   let handleSignup=(e)=>{
    e.preventDefault()
    navigate('/signup')
   }

   let handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(state);

     try{
       let payload={userEmail,password}
     

     let {data}=await axiosInstance.post("/authenticate",payload)
     let token=data.token
     let role=data.role
     console.log(token);

     if(token){
       localStorage.setItem("token",token)
       localStorage.setItem("role",role)
       if(role==="ROLE_ADMIN"){
         alert(`successfully logged in with email ${userEmail} as admin`)
         navigate("/home")
       }else{
         alert(`successfully logged in with the email ${userEmail} as user`)
         navigate("/home")
       }
     }else{
       localStorage.removeItem("token",token)
       localStorage.removeItem("role",role)
     }
   }catch{
     alert("invalid password or username")
     console.log("unable to connect");
   }}
  return (
    <div className={styles.page}>
      <form action="" className={styles.login}>
        <fieldset>
          <legend>Login Page</legend>
          <label htmlFor="userEmail">User Email : </label>
          <input type="email" name="userEmail" id="userEmail" value={userEmail} onChange={handleChange}/><br /><br />
          <label htmlFor="password">Password : </label>
          <input type="text" name="password" id="password" value={password} onChange={handleChange}/><br /><br />
          <input type="checkbox" name="remember" id="remember" className={styles.checkbox} />
          <label htmlFor="remember">Remember me</label><br /><br />
          <button type="submit" onClick={handleSubmit}>Login</button><br /><br />
          <div className={styles.add}>
          <p>New user Please</p>
          <h4 onClick={handleSignup} >Signup</h4>
          </div>
          
          

        </fieldset>
      </form>
    </div>
  )
}

export default Login