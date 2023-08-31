import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/pages/Homepage'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import AdminRegister from './components/admin/AdminRegister'
import ProtectedRouter from './components/ServiceRouters/ProtectedRouter'
import PublicRouter from './components/ServiceRouters/PublicRouter'
import About from './components/pages/About'
import Admin from './components/admin/Admin'
import Admindashboard from './components/admin/Admindashboard'
import Admincontent from './components/admin/Admincontent'
import Addmanager from './components/admin/Addmanager'
import Viewmanager from './components/admin/Viewmanager';
import Viewacademy from './components/admin/Viewacademy';
import Viewbranch from './components/admin/Viewbranch'
import Viewcourse from './components/admin/Viewcourse';
import Adminhome from './components/admin/Adminhome'
import AdminRouter from './components/ServiceRouters/AdminRouter'
import Addacademy from './components/admin/Addacademy';
import UpdateManager from './components/admin/UpdateManager';
import Editacademy from './components/admin/Editacademy'
import Addbranch from './components/admin/Addbranch'
import Updatebranch from './components/admin/Updatebranch'
import Addcourse from './components/admin/Addcourse'
import Editcourse from './components/admin/Editcourse'
import Membership from './components/pages/Membership'
import Courses from './components/pages/Courses'

const Routerfile = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<ProtectedRouter><Homepage/></ProtectedRouter>}/>
            <Route path='/membership/:id' element={<ProtectedRouter><Membership/></ProtectedRouter>}/>
            <Route path='/courses' element={<ProtectedRouter><Courses/></ProtectedRouter>}/>

            <Route path='/signup' element={<PublicRouter><Signup/></PublicRouter>}/>
            <Route path='/' element={<PublicRouter><Login/></PublicRouter>}/>
            <Route path='/adminregistration' element={<AdminRegister/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<AdminRouter><Admin/></AdminRouter>}>
                  <Route path='/admin/admindashboard' element={<AdminRouter><Admindashboard/></AdminRouter>}/>
                  <Route path='/admin/admincontent' element={<AdminRouter><Admincontent/></AdminRouter>}/>
                  <Route path='/admin/addmanager' element={<AdminRouter><Addmanager/></AdminRouter>}/>
                  <Route path='/admin/viewmanager' element={<AdminRouter><Viewmanager/></AdminRouter>}/>
                  <Route path='/admin/viewacademy' element={<AdminRouter><Viewacademy/></AdminRouter>}/>
                  <Route path='/admin/viewbranch' element={<AdminRouter><Viewbranch/></AdminRouter>}/>
                  <Route path='/admin/viewcourse' element={<AdminRouter><Viewcourse/></AdminRouter>}/>
                  <Route path='/admin/adminhome' element={<AdminRouter><Adminhome/></AdminRouter>}/>
                  <Route path='/admin/addacademy/:id' element={<AdminRouter><Addacademy/></AdminRouter>}/>
                  <Route path='/admin/updatemanager/:id' element={<AdminRouter><UpdateManager/></AdminRouter>}/>
                  <Route path='/admin/editacademy/:id' element={<AdminRouter><Editacademy/></AdminRouter>}/>
                  <Route path='/admin/addbranch/:id' element={<AdminRouter><Addbranch/></AdminRouter>}/>
                  <Route path='/admin/updatebranch/:id' element={<AdminRouter><Updatebranch/></AdminRouter>}/>
                  <Route path='/admin/addcourse/:id' element={<AdminRouter><Addcourse/></AdminRouter>}/>
                  <Route path='/admin/editcourse/:id' element={<AdminRouter><Editcourse/></AdminRouter>}/>
            </Route>
            

        </Routes>
    </Router>
  )
}

export default Routerfile