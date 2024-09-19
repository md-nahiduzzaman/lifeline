import React from 'react'
import { Outlet } from 'react-router-dom'
import Naver from '../compoments/Naver/Naver'
import Footer from '../compoments/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <Naver></Naver>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout

