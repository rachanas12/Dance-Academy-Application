import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import styles from"./admin.module.css"
import { faker } from '@faker-js/faker'
import axiosInstance from './../../helpers/axiosInstance';


const Viewmanager = () => {
  let token=localStorage.getItem("token")
  
  let img=faker.image.avatar()
  let [user,setUser]=useState([])
  let navigate=useNavigate()
 
   let handleDelete=async(id)=>{
    await axiosInstance.delete(`/academymanagers/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    window.location.assign("/admin/viewmanager")
    alert("successfully data deleted")
   }
    useEffect(()=>{
     let fetchData=async()=>{
        let {data}=await axiosInstance.get("/academymanagers/getall",
        {headers:{Authorization:`Bearer ${token}`}})
        let finalData=data.data
    setUser(finalData)
     }
     fetchData()
    },[])

  return (
    <div className={styles.mainnav}>
      {user.map((x)=>{
        return (<div className={styles.maindiv}>
            <div><img src={img} alt="" /></div>
            <div>
            <h3>{`Name : ${x.userName}`}</h3>
            <p>{`Email : ${x.email}`}</p>
            <p>{`Phone  : +91-${x.phone}`}</p>
            <p>{`Gender  : ${x.gender}`}</p>
            <p>{`DOB  : ${x.dob}`}</p></div>
            <div>
              <button onClick={(e)=>{
                e.preventDefault()
                navigate(`/admin/updatemanager/${x.id}`)
              }}>Update</button>
              <button onClick={(e)=>{
                e.preventDefault()
                navigate(`/admin/addacademy/${x.id}`)
              }}>Add Academy</button>
              <button onClick={()=>{
                handleDelete(x.id)
              }}>Delete</button>
            </div>
            
          </div>
          
        )
        
      })}
    </div>
  )
}

export default Viewmanager