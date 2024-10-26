import { useParams } from "react-router-dom"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useEffect, useState } from "react"

import { FaPaperPlane, FaPhone } from "react-icons/fa6"

const IndividualMessage = () => {
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
    const [user, setUser] = useState<any>({})
    console.log(user)
    useEffect(() => {
        axiosCommon.get(`/admin/${id}`)
            .then(res => setUser(res.data))
    }, [id])
     
    return (
        <div className="h-[100vh] w-full flex flex-col">
            <div className="min-h-[50px] w-full border-[2px] border-gray-400 mx-auto bg-white p-2 px-4 flex justify-between items-center">
                <img src={user.image_url} alt="" className="w-[55px] h-[55px] rounded-[50%]" />
                <FaPhone className="text-xl text-black"></FaPhone>
            </div>
            <div className="flex-grow w-full overflow-y-auto bg-gray-200 p-3">
                <div className="w-[350px] md:w-[500px] mr-auto shadow-md bg-white rounded-md p-2">
                      Lorem ipsum dolor sit, amet consectetur 
                      adipisicing elit. Sapiente id laudantium 
                      reiciendis a earum natus facilis ex consequatur
                       iure minima in consequuntur quia nulla magni perferendis
                        velit ea, cum explicabo eos eligendi.
                       Cumque, delectus odit. Ipsam ad dignissimos nemo quaerat.
                </div>
                <div className="bg-[#dcf8c6] ml-auto w-[350px] md:w-[500px] rounded-md p-2">
                Lorem ipsum dolor sit, amet consectetur 
                      adipisicing elit. Sapiente id laudantium 
                      reiciendis a earum natus facilis ex consequatur
                       iure minima in consequuntur quia nulla magni perferendis
                        velit ea, cum explicabo eos eligendi.
                       Cumque, delectus odit. Ipsam ad dignissimos nemo quaerat.
                </div>
                
            </div>
           <div className="w-full relative">
            <input type="text" name="message" placeholder="Message Start" className="pl-3 w-full h-[45px] 
            md:h-[55px] bg-white border-gray-400 border-[2px] " />
            <button className="absolute right-0 top-3"><div className="p-2 right-0">
                <FaPaperPlane className="text-gray-300 text-2xl rotate-45"></FaPaperPlane>
            </div></button>
           </div>
        </div>
    )
}
export default IndividualMessage