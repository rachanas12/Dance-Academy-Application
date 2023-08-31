import React from 'react'
import styles from"./admin.module.css"
import { useNavigate } from 'react-router-dom'


const Admindashboard = () => {
    let navigate=useNavigate()
    let handleManager=(e)=>{
        e.preventDefault()
        navigate("/admin/addmanager")
    }
    let handleManagerview=(e)=>{
        e.preventDefault()
        navigate("/admin/viewmanager")
    }
    let handleAcademy=(e)=>{
        e.preventDefault()
        navigate("/admin/viewacademy")
    }
    let handleBranch=(e)=>{
        e.preventDefault()
        navigate("/admin/viewbranch")
    }
    let handleCourse=(e)=>{
        e.preventDefault()
        navigate("/admin/viewcourse")
    }
    let handleHome=(e)=>{
        e.preventDefault()
        navigate("/home")
    }
  return (
    <nav className={styles.admindashboard}>
        <div>
        <h1>ADMIN DASHBOARD</h1><hr /><br />
        <ul>
        <li onClick={handleManager}>Add Academy Manager</li><hr /><br />
        <li onClick={handleManagerview}>View Academy Manager</li><hr /><br />
        <li onClick={handleAcademy}>View Academy</li><hr /><br />
        <li onClick={handleBranch}>View Branch</li><hr/><br />
        <li onClick={handleCourse}>View Course</li><hr/><br />
        <button onClick={handleHome} className={styles.delete}>Home</button><hr /><br />
        </ul>
        </div>
    </nav>
  )
}

export default Admindashboard