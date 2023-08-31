import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from"./admin.module.css"


const Admincontent = () => {
  
  return (
    <div className={styles.admincontent}>
      
        <Outlet/>
        </div>
    
  )
}

export default Admincontent