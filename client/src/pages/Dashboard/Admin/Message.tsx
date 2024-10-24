import axios from "axios";
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Message = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => setUsers(res.data))
    }, [])
    return (
        <div className="w-full h-[100vh] px-4 flex">
            <div className="bg-white h-full md:w-[290px] overflow-y-auto">
                <div className="mb-2 flex justify-between items-center p-1">
                    <h1 className="text-[22px] font-medium ">Chats</h1>
                    <button> <FaBars></FaBars> </button>
                </div>
                <div className="relative">
                    <FaSearch className="absolute top-[18px] left-1"></FaSearch>
                    <input type="text" placeholder="Search Here" className="rounded-md pl-6 border-[1px] 
                    border-b-[3px] border-b-green-600 w-full
                     h-[36px] mt-2 border-gray-300 focus:outline-none focus:border-b-green-600" />
                </div>
                {
                    users.map((info: any) => <div className="flex p-1 my-8">

                        <NavLink
                            to={`/message/${info._id}`}
                            className={({ isActive }) =>
                                `rounded-md w-full flex px-2 p-1 items-center text-[17px] font-medium ${isActive ? 'bg-gray-300' : ''}`
                            }
                        >
                            <img src={info.image_url} className="w-[45px] mr-3 h-[45px] rounded-[50%]" alt="" />
                            {info.name}
                        </NavLink>
                    </div>)
                }
            </div>

            <div className="flex-grow bg-gray-200">
                <Outlet></Outlet>
            </div>


        </div>
    )
}

export default Message