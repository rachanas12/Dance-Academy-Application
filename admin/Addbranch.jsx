import React, { useState } from 'react'
import axiosInstance from '../../helpers/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./academy.module.css"


const Addbranch = () => {
    let token=localStorage.getItem("token")
    let {id}=useParams()
    let navigate=useNavigate()
    let [branch,setBranch]=useState({
        address:"",
        city:"",
        phone:"",
        pincode:""
    })
    let {address,city,phone,pincode}=branch
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setBranch({...branch,[name]:value})
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={address,city,phone,pincode}
            let  finalData=await axiosInstance.post(`/branches/save/?aid=${id}`,payload,{headers : {Authorization : `Bearer ${token}`}})
        console.log(finalData);
        alert(`successfully registered as Branch`)
        navigate("/admin/viewbranch")
        }
        catch{
            console.log("unable to connect server");
        }
    }
  return (
    <div>
        <form action="" className={styles.updateform}>
            <h1>Add Branch</h1>
            <label htmlFor="address">Address - </label>
            <input type="text" name="address" id="address" value={address} onChange={handleData}/><br /><br />
            <label htmlFor="city">City - </label>
            <input type="text" name="city" id="city" value={city} onChange={handleData}/><br /><br />
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" value={phone} onChange={handleData}/><br /><br />
            <label htmlFor="pincode">Pincode -  </label>
            <input type="text" name="pincode" id="pincode"  value={pincode} onChange={handleData}/><br /><br />
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    </div>
  )
}

export default Addbranch