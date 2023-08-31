import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./navbar.module.css"
import logo from "../assets/logo.jpg"

const Navbar = () => {
    let navigate=useNavigate()
    let token=localStorage.getItem("token")
    let role=localStorage.getItem("role")

    let handleLogin=(e)=>{
    e.preventDefault()
    navigate("/")
    }
    let handleAdmin=(e)=>{
        e.preventDefault()
        navigate("/admin")
    }
    let hadleLogout=(e)=>{
        e.preventDefault()
        navigate("/")
        localStorage.clear()
        }
        let handleHome=(e)=>{
            e.preventDefault()
            navigate("/home")
            }
    let handleAbout=(e)=>{
        e.preventDefault()
        navigate("/about")
        }
        let handleCourse=(e)=>{
            e.preventDefault()
            navigate("/courses")
        }
        let handleSignup=(e)=>{
            e.preventDefault()
            navigate("/signup")
            }
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}><img src={logo} alt="" /></div>
        
        <div className={styles.menu}>
            <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleAbout}>About</li>
            <h4>{role==="ROLE_ADMIN" ? <li onClick={handleAdmin}>AdminDashboard</li> : <li onClick={handleCourse}>Courses</li>}</h4>
            <p className={styles.a}>{token ? <li onClick={hadleLogout}>Logout</li>:
            <><li onClick={handleSignup} className={styles.a1}>Signup</li>
            <li onClick={handleLogin} className={styles.a1}>Login</li></>
            }</p>
            
            
            </ul>
        </div>
    </nav>
  )
}

export default Navbar