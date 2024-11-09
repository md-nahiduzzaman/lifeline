import { useEffect, useState } from "react"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import imageUrl from '../../../assets/images/bg_chat3.jpg'
import { FaBars, FaComment } from "react-icons/fa6"
import { Link } from "react-router-dom"
import user2 from '../../../assets/images/user2.png'
const UserMessage = () => {
    const axiosCommon = useAxiosCommon()
    const [admin, setAdmin] = useState<any>([])
    useEffect(() => {
        axiosCommon.get('/find_admin')
            .then(res => {
                console.log(res.data)
                setAdmin(res.data)
            })
    }, [])

    const bgStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="w-full p-3 mt-5 min-h-[80vh] flex flex-col md:flex-row ">
            <div className="w-full md:w-[355px] h-[350px] overflow-y-auto border-r-2  p-2 bg-white border-gray-300">
                <div className="flex justify-between p-2 items-center">
                    <h1 className="text-[22px] font-medium">Message</h1>
                    <FaBars className="text-xl"></FaBars>
                </div>
                {
                    admin.map((info: any) => <div className="flex space-x-2 w-full items-center mt-6 p-2 border-2 border-gray-300 rounded-md">
                        <img src={info.image_url} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
                        <div className="flex-grow">
                         <Link to={''} className="flex justify-between">
                         <Link to={`/userChat/${info._id}`} className="text-[16px] font-medium block">{info.name}</Link>
                         <FaComment className="text-green-400 "></FaComment>
                         </Link>
                        <p className="text-gray-400 text-[14px]">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>)
                }
               
            </div>
            <div style={bgStyle} className="min-h-[80vh] flex-grow  p-4">
                  <div className="bg-white p-3 rounded-md opacity-70">
                       <p className="text-3xl font-medium text-center">Build Here Your A Communication</p>
                       <p className="mt-3 text-center font-medium">The definition of 
                        communication skills is the ability for an individual to 
                        accurately convey a message to another person or group of people.</p>
                  </div>

                  <div className="flex w-full justify-evenly flex-wrap mt-20 gap-5">
                       <div className="w-[330px] h-[240px] rounded-md shadow-xl bg-[#3eb489] p-3">
                           <img src={user2} className="block mx-auto w-[50px] h-[50px] rounded-[50%] mt-2" alt="" />
                           <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quia dolorem aperiam quae dolore doloribus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel.
                            </p>
                       </div>
                       <div className="w-[330px] h-[240px] rounded-md shadow-xl bg-white p-3"> 
                           <img src={user2} className="block mx-auto w-[50px] h-[50px] rounded-[50%] mt-2" alt="" />
                           <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quia dolorem aperiam quae dolore doloribus sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vitae!
                            </p>
                       </div>
                  </div>
            </div>
        </div>
    )
}
export default UserMessage