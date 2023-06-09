import React from 'react'

function Admin_setting() {
  let border = {
    border: '0px solid rgba(0, 0, 0, 0.125)',
    boxShadow: 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem'  
  }
  return (
    <div className="absolute lg:left-[250px] max-w-[1026px] h-auto container top-24 my-12 mx-auto px-4 md:px-12">
      <div className="h-full rounded-xl">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 mb-8 bg-white shadow-md rounded-xl">
            <div className="flex justify-between mt-[25px]">
              <span className="text-xl font-semibold block">Admin Profile</span>
              <a href="#" className="-mt-2 text-md font-bold text-white bg-gray-700 relative top-[-1rem] rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
            </div>
            <span className="text-gray-600 my-[5px]">This information is secret so be careful</span>
            <div className="w-full p-8 mx-2 flex justify-center">
              <input type="file" className='text-transparent border-none bg-transparent h-0 w-0' id='choose-pic'/>
              <label htmlFor="choose-pic">
                <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center items-center border-solid border-2 border-black text-center">
                  <i className="fa-solid fa-user m-2 cursor-pointer text-[45px] text-black"></i>
                </div>
              </label>
              {/* <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="">                           */}
              </div>
          </div>         
          <div className="w-full md:w-3/5 p-8 mb-8 bg-white lg:ml-4 shadow-md rounded-xl">
            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label for="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                <div className="flex">
                  <input id="username" className="border-1  rounded-r px-4 py-2 w-full" style={border} type="text" placeholder='Enter your Name' />
                </div>
              </div>
              <div className="pb-4">
                <label for="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                <input id="email" className="border-1  rounded-r px-4 py-2 w-full" style={border} type="email" placeholder="example@example.com" />
                <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Admin_setting