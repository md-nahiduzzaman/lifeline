import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const VideoChats = () => {
    const navigations=useNavigate()
    const [roomId,setRoomId]=useState({
        room:''
    })
   const handileClickroom=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

navigations(`/room/${roomId?.room}`)
   }
  return (
    <div className="">
      <section className="w-full mt-12 md:w-1/2 lg:w-1/3 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

    <form onSubmit={handileClickroom}>
        <div className="grid grid-cols-1 gap-6 mt-4 ">
            <div className="w-full">
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Enter room Id</label>
                <input onChange={(e)=>setRoomId({...roomId,room:e.target.value})} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

        </div>

        <div className="mt-6">
            <button type="submit" className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Join Now</button>
        </div>
    </form>
</section>

    </div>
  )
}

export default VideoChats
