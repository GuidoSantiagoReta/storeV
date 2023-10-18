import React from 'react'
import { Outlet } from 'react-router-dom' /* para referenciar rutas */
import NavBar from '../../components/nav/NavBar'
import { Spinner } from 'react-bootstrap'

const MainLayout = () => {
  return (
    <div>
      <NavBar/>
      {/*<Spinner/>*/}
      <Outlet/>
     
      
    </div>
  )
}

export default MainLayout
