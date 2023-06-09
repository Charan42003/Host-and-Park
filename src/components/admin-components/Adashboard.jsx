import React from 'react'
import '../../components/style.css';

function Adashboard() {
  let vehicleinlot = {
    opacity: '1',
    background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
    boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem'
  }
  let vehicletot = {
    background: 'linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))'
  }
  let border = {
    border: '0px solid rgba(0, 0, 0, 0.125)',
    boxShadow: 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem'  
  }
  let hr_line = {
    background: 'linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0), rgb(255, 255, 255)) !important'
  }
  let background = {
    background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
    color: 'white'
  }
  return (
    <div className="absolute lg:left-[300px] max-w-[1026px] top-24 h-auto container my-12 mx-auto px-4 md:px-12"> 
      <div className=" flex flex-wrap justify-around mx-1 lg:-mx-4 mt-[-20px]">  
        <div className="flex flex-wrap justify-between mx-1 lg:-mx-4">
          <div className="bg-white relative rounded-xl w-[20rem] h-[10rem] mx-auto my-[40px] md:mr-8 lg:mr-8" style={border}>
              <div className="px-6 py-5 rounded-xl text-white absolute right-[30px] top-[-25px]" style={vehicleinlot}>
                <i className="fa-solid fa-car text-[30px]"></i>
              </div> 
              <div className="absolute bottom-6 left-6 ">
                <h5 className="mb-1 text-[35px] font-medium text-gray-900 text-left">05</h5>
                <span className="text-[20px] text-gray-500 ">Vehicles In Your Lot</span>
                <hr className="hrr" style={ hr_line}/>
              </div>
          </div>
          <div className="bg-white relative rounded-xl w-[20rem] h-[10rem] mx-auto my-[40px] md:mr-8 lg:ml-8" style={border}>
              <div className="px-6 py-5 rounded-xl text-white absolute right-[30px] top-[-25px]" style={vehicletot}>
                <i className="fa-solid fa-car text-[30px]"></i>
              </div>
              <div className="absolute bottom-6 left-6 ">
                <h5 className="mb-1 text-[35px] font-medium text-gray-900 text-left">55</h5>
                <span className="text-[20px] text-gray-500 ">So Far Parked Vehicles</span>
                <hr className="hrr" style={ hr_line}/>
              </div>
            </div>
          </div>
      </div>  
      <div className="">
        
        <div className="overflow-x-auto relative shadow-md">
            
            <table className="w-full text-sm text-left text-gray-500  ">
                <thead className="text-xs text-gray-700 uppercase " style={background}>
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Sl.No.
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Vehicle No.
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Start Time
                        </th>
                        <th scope="col" className="py-3 px-6">
                            End Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <td className="p-4 w-4">
                            01.
                        </td>
                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap ">
                          <div className="w-[60px] h-[60px] rounded-[50%] border-solid border-2 border-black text-center">
                            <i className="fa-solid fa-user m-2 cursor-pointer text-[35px] text-black"></i>
                          </div>
                          <div className="pl-3">
                              <div className="text-base font-semibold">User</div>
                              <div className="font-normal text-gray-500">user mail Id</div>
                          </div>  
                        </th>
                        <td className="py-4 px-6">
                          KA09AZ9999
                        </td>
                        <td className="py-4 px-6">
                            <div className="flex items-center">
                                14/4/2022
                            </div>
                        </td>
                        <td className="py-4 px-6">
                            12:33PM
                        </td>
                        <td className="py-4 px-6">
                            -
                        </td>
                    </tr>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <td className="p-4 w-4">
                            02.
                        </td>
                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap ">
                          <div className="w-[60px] h-[60px] rounded-[50%] border-solid border-2 border-black text-center">
                            <i className="fa-solid fa-user m-2 cursor-pointer text-[35px] text-black"></i>
                          </div>
                          <div className="pl-3">
                              <div className="text-base font-semibold">User</div>
                              <div className="font-normal text-gray-500">user mail Id</div>
                          </div>  
                        </th>
                        <td className="py-4 px-6">
                          KA00AZ0000
                        </td>
                        <td className="py-4 px-6">
                            <div className="flex items-center">
                                14/4/2022
                            </div>
                        </td>
                        <td className="py-4 px-6">
                            2:33PM
                        </td>
                        <td className="py-4 px-6">
                            -
                        </td>
                    </tr>                
                </tbody>
            </table>
        </div>

      </div>
    </div>
  )
}

export default Adashboard