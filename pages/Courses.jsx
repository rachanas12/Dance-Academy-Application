import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
import { faker } from '@faker-js/faker';
import styles from"./home.module.css"
import axiosInstance from './../../helpers/axiosInstance';
import video from "../assets/h1.mp4"

const Courses = () => {
    let navigate=useNavigate()
  let image=(faker.image.city())
  let token=localStorage.getItem("token")
  
  let[course,setCourse]=useState([])
 
    
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
                  <video src={video} autoPlay muted loop className={styles.page1} ></video>

      {course.map((x)=>{
        return(
          <div className={styles.maindiv}>
            <div><img src={image} alt="" /></div><br />
            <div>
              <h5>{`Course Name - ${x.type}`}</h5>

              <p>{`Course Duration - ${x.courseDurationInMonths}`}</p>
              <p>{`Course Fees - ${x.fee}`}</p>
            </div>
            <div><br />
              <button onClick={(e)=>{
                e.preventDefault()
                navigate(`/admin/membership/${x.id}`)
              }}>Register</button>
            </div>
          </div>
        )
      })}
      <ToastContainer/>
    </div>
  )
}

export default Courses