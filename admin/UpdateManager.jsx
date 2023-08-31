import React,{useEffect, useState} from 'react'
import axiosInstance from '../../helpers/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./academy.module.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const UpdateManager = () => {
  let[manager,setManager]=useState([])
  let token=localStorage.getItem("token")
let {id}=useParams()
let navigate=useNavigate()

let handleUpdate=async(e)=>{
e.preventDefault()
try{
  let payload=manager
await axiosInstance.put("/academymanagers/update",payload,{headers:{Authorization:`Bearer ${token}`}})
toast.success("successfully updated",{position:toast.POSITION.TOP_CENTER})
navigate("/admin/viewmanager")
}
catch{
  console.log("unable to connect server");
}
}
let handleData=(e)=>{
  let name=e.target.name
let value=e.target.value
setManager({...manager,[name]:value})
}
  useEffect(()=>{
    let fetch=async()=>{
      let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    let fetchedData=data.data
    setManager(fetchedData)
    }
    fetch()
  },[])
  return (
    <div >
      <form action="" className={styles.updateform}>
        <h1>Update Academy Manager</h1>
        <label htmlFor="userName">userName - </label>
        <input type="text" name="userName" id="userName" value={manager.userName}  onChange={handleData}/><br /><br />
        <label htmlFor="email">Email - </label>
        <input type="email" name="email" id="email" value={manager.email} onChange={handleData}/><br /><br />
        <label htmlFor="phone">Phone - </label>
        <input type="text" name="phone" id="phone" value={manager.phone} onChange={handleData}/><br /><br />
        <label htmlFor="password">Password - </label>
        <input type="password" name="password" id="password" value={manager.password}   onChange={handleData}/><br /><br />
        <label htmlFor="dob">DOB - </label>
        <input type="date" name="dob" id="dob" value={manager.dob} onChange={handleData}/><br /><br />
        <button type="submit" onClick={handleUpdate}>Update</button>

      </form>
      <ToastContainer/>
    </div>
  )
}

export default UpdateManager