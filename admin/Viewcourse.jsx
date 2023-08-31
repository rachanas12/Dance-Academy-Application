import React, { useEffect, useState } from 'react'
import axiosInstance from '../../helpers/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import styles from"./admin.module.css"



const Viewcourse = () => {
  let navigate=useNavigate()
  let image=(faker.image.city())
  let token=localStorage.getItem("token")
  
  let[course,setCourse]=useState([])
  let handleDelete=async(id)=>{
    let data=await axiosInstance.delete(`/dancecourses/delete/${id}`,
    {headers:{Authorization:`Bearer ${token}`}})
    window.location.assign("/admin/viewcourse")
    toast.success(`Successfully Deletedn with ${course.type} course`,{position:toast.POSITION.TOP_CENTER})
   }
  useEffect(()=>{
    let fetchData=async()=>{
      let {data}=await axiosInstance.get("/dancecourses/getall",
      {headers:{Authorization:`Bearer ${token}`}})
      let finalData=data.data
  setCourse(finalData)
   }
   fetchData()
  },[])
  return (
    <div className={styles.mainnav}>
      {course.map((x)=>{
        return(
          <div className={styles.maindiv}>
            <div><img src={image} alt="" /></div>
            <div>
              <h5>{`Course Name - ${x.type}`}</h5>
              <p>{`Course Duration - ${x.courseDurationInMonths}`}</p>
              <p>{`Course Fees - ${x.fee}`}</p>
            </div>
            <div>
              <button onClick={(e)=>{
                e.preventDefault()
                navigate(`/admin/editcourse/${x.id}`)
              }}>Edit</button>
              <button 
              onClick={()=>{
                handleDelete(x.id)
              }}
              >Delete</button>
            </div>
          </div>
        )
      })}
      <ToastContainer/>
    </div>
  )
}

export default Viewcourse