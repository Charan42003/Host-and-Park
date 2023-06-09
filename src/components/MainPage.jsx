import React from 'react';
import '../components/style.css';
import car_cr from '../images/car-crop.jpg';
import car_bg from '../images/car.jpg';
import logo from '../images/logo-white.png';
import s_logo from '../images/logo.png';
import { Link } from "react-router-dom";
// import './Mainpage.css'

function MainPage() {
  let background = {
    background: 'black'
  }
  let border = {
    margin: '0 30px'
  }
  return (
    <>
      <div className={`text-white w-[100%] h-[100vh] main-page overflow-hidden`} style={background}>
        <div className="flex justify-center items-center w-[fit-content] z-50 p-5">
          <img src={s_logo} alt="" className="w-[90px] h-auto z-50"/>
        </div>
        <div className="flex flex-col absolute top-[30%] justify-center z-50 items-center md:top-[10%] md:left-[50%] md:-translate-x-[50%] lg:left-auto lg:translate-x-0 lg:right-[15%] lg:top-[35%]">
            <img src={logo} alt="" className=':h-auto w-[50%] md:w-[100%]' /> 
          <div className="flex flex-row text-white justify-evenly relative mt-7 z-50">
            <Link to='/admin/admin-dashboard' className='px-6 py-1 cursor-pointer rounded-md redirect hover:text-[#c1bfbf]' style={border}>Admin</Link>
            <Link to='/user/user-dashboard' className='px-6 py-1 cursor-pointer rounded-md redirect hover:text-[#c1bfbf]' style={border}>User</Link>
          </div>
        </div>
        <img src={car_bg} alt="" className='absolute bottom-0 lg:top-0 md:block z-0 md:top-0 lg:hidden opacity-50'/>
        <img src={car_cr} alt="" className='absolute bottom-0 lg:top-0 md:block z-0 md:top-0 hidden lg:block opacity-50 '/>
      </div>
    </>
  )
}

export default MainPage