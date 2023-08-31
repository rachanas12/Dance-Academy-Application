import React from 'react'
import styles from "./home.module.css"
import video from "../assets/dance.mp4"
import { useNavigate } from 'react-router-dom'




const Homepage = () => {
  let navigate=useNavigate()
  let handleHome=(e)=>{
e.preventDefault()
navigate("/about  ")
  }
  return (
    < >
      <div className={styles.h1}>
        <div className={styles.h11}><video src={video} autoPlay muted loop className={styles.page} ></video></div>
      <div className={styles.h12}><h1>REACH YOUR DANCE GOALS</h1>
      <button type="submit" onClick={handleHome}>GET STARTED</button></div>
      </div>
      
      
    </>
  )
}

export default Homepage