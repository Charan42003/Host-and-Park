import React from 'react'

function Add_premium() {
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
    </div>
  </div>
  )
}

export default Add_premium