import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './assets/component/About/About.jsx'
import Contact from './assets/component/Contact/Contact.jsx'
import User from './assets/component/User/User.jsx'
import GitHub, { githubInfoLoader } from './assets/component/GitHub/GitHub.jsx'
 


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
      
//     ]
//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>

    <Route path="/" element={<Home/>}></Route>

    <Route path="about" element={<About/>}></Route>

    <Route path="contact" element={<Contact/>}></Route>

    <Route path="user/:userId" element={<User/>}></Route>

    <Route 
    loader={githubInfoLoader}
    path='gitHub' element={<GitHub/>}>
       </Route>
    

     

  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
