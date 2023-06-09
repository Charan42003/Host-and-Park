import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo-white.png';
import '../../components/style.css';

function Asidebar() {
  const [change, setChange] = useState("left-[-300px]")
  const opened = () => {
    setChange("left-[0px]")
  }
  const clossed = () => {
    setChange("left-[-300px]")
  }
  return (
    <>
    <div className={` ${change} fixed lg:left-0 z-[60] transition-left duration-1000 m-4 sidebar-cover text-center `}>
      <div className={` rounded-xl border-none flex flex-col sidebar p-5 pt-[4rem]`}>  
        <div className="bg-transparent relative flex flex-row lg:pt-4 text-center" >
          <Link to="/admin/admin-dashboard" className="flex flex-row  text-center" onClick={ clossed }>
            <div className="w-[60px] h-[60px] rounded-[50%] border-solid border-2 border-white text-center">
              <i className="fa-solid fa-user m-2 cursor-pointer text-[35px] text-white"></i>
            </div>
            <div>
              <h4 className="text-white ml-3 flex items-center tracking-widest log text-[20px]">Host & Park</h4>
              <small className='text-white text-left'>(admin)</small>
            </div>
          </Link>
            <i className="fa-solid fa-xmark text-white absolute right-1 text-[20px] lg:hidden top-[-40px]" onClick={clossed}></i>
        </div>
        <hr className="hrr" />
        <div className=" text-white flex flex-col justify-around items-center mt-4 pb-4 dashboard-link">
          <Link to="/admin/admin-dashboard" onClick={ clossed } className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-house w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Dashboard</div>
          </Link> 
          <Link to="/admin/addlots" onClick={ clossed } className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-table-columns w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Add Lots</div>
          </Link> 
          <Link to="/admin/addpremium" onClick={ clossed } className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-plus w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Premium Services</div>
          </Link> 
          <Link to="/admin/adminrecord" onClick={ clossed } className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-regular fa-clipboard w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Record</div>
          </Link> 
          <Link to="/admin/adminsetting" onClick={ clossed } className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-gear w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Settings</div>
          </Link>                
        </div>
        <hr className="hrr" />
        <div className="text-center absolute bottom-4 translate-x--1/2">
          <img src={logo} alt="logo" className="bg-transparent w-[80%]" />
        </div>
      </div>
    </div>  
    {/* NavBar */}
    <div className="navbar rounded-[18px] bg-opacity-10 backdrop-blur-sm  bg-white/30 w-[-webkit-fill-available] pb-[20px] h-auto fixed z-50 m-5 lg:w-[75%] lg:ml-[300px]">
      <div className=" flex flex-wrap justify-between">
        <div className="flex flex-nowrap m-4 items-center opacity-40 z-50">
          <Link to='/'>
            <i className="fa-solid fa-house"></i>
          </Link>
          <i className="fa-solid fa-slash text-[15px] mx-1 rotate-90"></i>
          <span>#section-appears-here</span>
        </div>
        <div className="flex flex-wrap items-center text-gray-500">
          <input type="text" className='border-[1px] border-gray-300 rounded w-28 h-8 bg-transparent mx-3' placeholder='  Search'/>
          <i className="fa-solid fa-user m-2 cursor-pointer"></i>
          <i className="fa-solid fa-bars m-2 cursor-pointer lg:hidden" onClick={opened}></i>
          <i className="fa-solid fa-gear m-2 cursor-pointer"></i>
          <i className="fa-solid fa-bell m-2 cursor-pointer"></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default Asidebar