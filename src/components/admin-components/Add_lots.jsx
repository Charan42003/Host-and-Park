import React from 'react'

function Add_lots() {
  let tbackground = {
    background: 'linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))'
  }
  return (
    <div className="absolute lg:left-[300px] max-w-[1026px] top-24 h-auto container my-12 mx-auto px-4 md:px-12"> 
      <div className=" flex flex-wrap justify-around mx-1 lg:-mx-4 mt-[-20px]">  
        <div className="flex flex-wrap justify-center mt-8  lg:-mx-4">
          <div className="max-w-2xl rounded-xl shadow-xl bg-gray-50">
              <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">Upload photo</label>
                  <div className="flex items-center justify-center w-full">
                      <label
                          className="flex flex-col w-full h-32 lg:h-[300px] border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center pt-7">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                  Attach Your Lots Photo</p>
                          </div>
                          <input type="file" className="opacity-0" />
                      </label>
                  </div>
              </div>
              <div className="flex justify-center p-2">
                  <button className="w-full px-4 py-2 text-white bg-gradient-to-l from-green-400 via-green-500 to-green-600 rounded shadow-xl">Upload</button>
              </div>
          </div>
        </div> 
        <div className="flex flex-wrap justify-center mt-8  lg:-mx-4">
          <div className="max-w-2xl rounded-xl shadow-xl bg-gray-50">
              <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">Give Your Description & Address</label>
                  <div className="flex items-center justify-center w-full">
                    <textarea className="lg:w-[30rem] lg:h-28 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>
                  </div>
              </div>
              <div className=" flex justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" className='lg:w-[30rem] lg:h-56 w-[15rem] h-48 rounded-xl'></iframe>
              </div>
              <div className="flex justify-center p-2">
                  <button className="w-full px-4 py-2 text-white bg-gradient-to-l from-green-400 via-green-500 to-green-600 rounded shadow-xl">Upload lot</button>
              </div>
          </div>
        </div> 
      </div>
      <div className="rounded-xl mt-12 mb-20">
        <div className="overflow-x-auto relative shadow-md">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-white uppercase bg-gray-50" style={tbackground}>
                    <tr>
                        <th scope="col" className="py-3 px-6">
                           Lot Name 
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Location
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Uploaded on
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50 ">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        land 1
                    </th>
                    <td className="py-4 px-6">
                        Bangalore
                    </td>
                    <td className="py-4 px-6">
                        14/4/2022
                    </td>
                    <td className="py-4 px-6">
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 ">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                        land 2
                    </th>
                    <td className="py-4 px-6">
                        Mysore
                    </td>
                    <td className="py-4 px-6">
                        18/4/2022
                    </td>
                    <td className="py-4 px-6">
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
    </div>
  )
}

export default Add_lots