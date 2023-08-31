import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import styles from"./academy.module.css"
import axiosInstance from './../../helpers/axiosInstance';

const Viewacademy = () => {
  let token=localStorage.getItem("token")

  let [academy,setAcademy]=useState([])
  let navigate=useNavigate()

   let handleDelete=async(id)=>{
    let data=await axiosInstance.delete(`/academies/delete/${id}`,
    {headers:{Authorization:`Bearer ${token}`}})
    window.location.assign("/admin/viewacademy")
    alert("successfully data deleted")
   }
    useEffect(()=>{
     let fetchData=async()=>{
        let {data}=await axiosInstance.get("/academies/getall",
        {headers:{Authorization:`Bearer ${token}`}})
        let finalData=data.data
    setAcademy(finalData)
     }
     fetchData()
    },[])
  return (
    <div className={styles.academy}>
      <h1>List of Academies</h1><br />
      <table >
        <tr><th>Sl.No</th>
        <th>Academy Name</th>
        <th>Description</th>
        <th>Email</th>
        <th>Contact Number</th>
        <th>Edit</th>
        <th>Add Branch</th>
        <th>Delete</th></tr>
      {academy.map((x,i)=>{
        return(
          <tr className={styles.table1}>
            <td>{i+1}</td>
            <td>{x.academyName}</td>
            <td>{x.description}</td>
            <td>{x.email}</td>
            <td>{x.contact}</td>
            <td><button type="submit" onClick={(e)=>{
                e.preventDefault()
                navigate(`/admin/editacademy/${x.id}`)
              }}>Edit</button></td>
            <td><button type="submit"  onClick={(e)=>{
                e.preventDefault()
                navigate(`/admin/addbranch/${x.id}`)
              }}>Add Branch</button></td>
            <td><button type="submit" onClick={()=>{
                handleDelete(x.id)
              }}>Delete</button></td>
          </tr>
        )
      })}
      </table>
    </div>
  )
}

export default Viewacademy