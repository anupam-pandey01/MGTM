import { useState } from 'react'
import heroImg from './assets/images/hero.jpg'
import SiteHeader from './public/component/layout/SiteHeader/SiteHeader'
import Home from './public/pages/Home/Home'
import SiteFooter from './public/component/layout/SiteFooter/SiteFooter'
import { Routes, Route } from 'react-router'
import About from './public/pages/About/About'
import Services from './public/pages/Services/Services'
import Faq from './public/pages/Faq/Faq'
import Blogs from './public/pages/Blogs/Blogs'
import Partnerships from './public/pages/paternerships/Partnerships'
import Contact from './public/pages/ContactUs/Contact'
import PublicLayout from './public/component/layout/PublicLayout'
import AdminLayout from './admin/component/layout/AdminLayout/AdminLayout'
import { ToastContainer } from 'react-toastify'
import { ServicesDetail } from './public/pages/ServicesDetail/ServicesDetails'
import StudyAbroad from './public/pages/StudyAbroad/StudyAbroad'
import Login from './admin/pages/Login/Login'
import Dashboard from './admin/pages/Dashboard/Dashboard'
import Students from './admin/pages/Students/Students'
import ProtectedRoute from './utils/ProtectedRoute'
import PublicProtectedRoute from './utils/PublicProtectedRoute'
import FounderAbout from './public/pages/Founder/Founder'
import CreatePost from './admin/pages/CreatePost/CreatePost'
import BlogManagement from './admin/pages/BlogManagement/BlogManagement'

// import { Students } from './admin/pages/Students/Students'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/services/:slug' element={<ServicesDetail/>}/>
          <Route path='/services/study-abroad' element={<StudyAbroad/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/partnerships' element={<Partnerships/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/founder' element={<FounderAbout/>}/>
        </Route>

        {/* ADMIN LOGIN */}
        <Route element={<PublicProtectedRoute/>}>
          <Route path="/admin/login" element={<Login />} />
        </Route>
        
        <Route element={<ProtectedRoute/>}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path="purchase" element={<Students/>} />
              <Route  path="blogs"  element={<BlogManagement/>}/>
              <Route  path="blogs/create"  element={<CreatePost/>}/>
              <Route  path="blogs/:id"  element={<CreatePost/>}/>
              <Route path="services" element={<h1>Services</h1>}/>
              <Route path="partners" element={<h1>Partners</h1>}/>
              <Route path="messages" element={<h1>Messages</h1>}/>
            </Route>
        </Route>
        {/* ADMIN PANEL */}
        
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App