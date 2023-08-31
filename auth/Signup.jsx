import React from 'react'
import { useState } from 'react'
import axiosInstance from './../../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import styles from"./signup.module.css"


const Signup = () => {
let navigate=useNavigate()

  let [state,setState]=useState({
    userName:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
    dob:""
  })
  let {userName,email,password,phone,gender,dob}=state
  let handleData=(e)=>{
let name=e.target.name
let value=e.target.value
setState({...state,[name]:value})
console.log(state);
}

let handleSubmit=async (e)=>{
e.preventDefault()

console.log(state);
try{
  let payload={
    userName,
    email,
    password,
    phone,
    gender,
    dob
  }
  let  finalData=await axiosInstance.post("/users/save",payload)
  console.log(finalData);
alert(`successfully registered with ${email} as user`)
navigate("/")
  
  }
catch{
  console.log("unable to connect server");
}
}
  return (
    <div className={styles.page}>
      <form action="/signup" className={styles.login}>
        <fieldset className={styles.signup}>
          <legend>Register</legend>
          <input type="text" name="userName" id="userName"  placeholder='User Name' value={userName}  onChange={handleData}/><br /><br />
          <input type="email" name="email" id="email" placeholder='Email Address' value={email}   onChange={handleData}/><br /><br />
          <input type="password" name="password" id="password" placeholder='Password' value={password}   onChange={handleData}/><br /><br />
          <input type="text" name="phone" id="phone"  placeholder='Phone Number' value={phone}  onChange={handleData}/><br /><br />

          <p className={styles.gender}><h2>Gender</h2><br />
           <h4><input type="radio" name="gender" id="male" value="Male" onChange={handleData} className={styles.checkbox} />
           <label htmlFor="male">Male</label>
           <input type="radio" name="gender" id="female" value="Female" onChange={handleData} className={styles.checkbox}  />
           <label htmlFor="female">Female</label>
           <input type="radio" name="gender" id="other" value="Other" onChange={handleData}  className={styles.checkbox} />
           <label htmlFor="other">Other</label></h4></p>
          
          <label htmlFor="dob"  id={styles.dob}>Date of Birth</label><br />
          <input type="date" name="dob" id="dob" value={dob} onChange={handleData}/><br /><br />
          <button type="submit" onClick={handleSubmit} >Register</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Signup