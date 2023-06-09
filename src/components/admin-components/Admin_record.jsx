import React from 'react'

function Admin_record() {
  let background = {
    background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
    color: 'white'
  }
  return (
    <div className="absolute lg:left-[250px] max-w-[1026px] h-auto top-24 container my-12 mx-auto px-4 md:px-12">      
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
  )
}

export default Admin_record