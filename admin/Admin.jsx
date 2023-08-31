import React from 'react'
import Admindashboard from './Admindashboard'
import Admincontent from './Admincontent'
import styles from"./admin.module.css"


const Admin = () => {
  return (
    <div className={styles.admin}>
        <Admindashboard/>
        <Admincontent/>
    </div>
  )
}

export default Admin