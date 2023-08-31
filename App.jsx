import React from 'react'
import Routerfile from './Routerfile'

const App = () => {
  return (
    <div><Routerfile/></div>
  )
}

export default App


//============================================================

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [filter,setFilter]=useState("")
//   let [user,setUser]=useState([])
//   let [length,setLength]=useState("")

//   let handleLook=(e)=>{

// setFilter(e.target.value)

// setLength(filter.length)
//   }
//   useEffect(()=>{

// let fetchData=async()=>{
// let data=await window.fetch("http://api.github.com/users")
// let finalData=await data.json()
// setUser(finalData)
// console.log(finalData);

// }
// fetchData()
//   },[])
//   return (
//     <>
// <input type="search" name="search" id="search" placeholder='search' onChange={handleLook} />
// { filter==null? "wait" : user.map((x,y)=>{
//   if(filter==x.login.slice(0,length+1).toLowerCase()){
//     return(
// <h2 key={y}>
//   <p>{x.login}</p>
//   <p>{x.avatar_url}</p>
// </h2>

//     )
//   }
  
//  })}

//     </>
//   )
// }

// export default App