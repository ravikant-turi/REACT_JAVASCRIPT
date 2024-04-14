import React from 'react'
import Header from './assets/component/Header/Header'
import Footer from './assets/component/Footer/Footer'

import { Outlet } from 'react-router-dom'


function Layout() {
  return (
  <>
  <Header/>
      <Outlet></Outlet>
  <Footer/>
  </>
  )
}

export default Layout
