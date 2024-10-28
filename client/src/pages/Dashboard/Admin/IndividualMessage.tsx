import { useParams } from "react-router-dom"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useContext, useEffect, useState } from "react"

import { FaPaperPlane, FaPhone, FaPlus, FaReply } from "react-icons/fa6"
import { AuthContext } from "../../../providers/AuthProvider"
import { FaEllipsisV, FaSave } from "react-icons/fa"
import Swal from "sweetalert2"

const IndividualMessage = () => {
    const [arr, setArr] = useState<any>([])
    const [messages, setMessages] = useState<any>('')
    const [allMesage, setAllmessage] = useState<any>([])
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
    const [users, setUser] = useState<any>({})
    const [reply, setReply] = useState<String>('')
    const [bol, setBol] = useState<Boolean>(false)

    useEffect(() => {
        axiosCommon.get(`/admin/${id}`)
            .then(res => setUser(res.data))
    }, [id])


    useEffect(() => {
        if (user && users) {
            const interval = setInterval(async () => {
                try {
                    const response = await fetch(`https://lifeline-rouge.vercel.app/messagecollection?senderEmail=${user.email}&receiverEmail=${users.email}`);
                    const data = await response.json();
                    setAllmessage(data)
                } catch (error) {
                    console.error("Failed to fetch messages:", error);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [user, users]);
    const handelArr = (id: any) => {
        let arr1 = [];
        arr1.push(id)
        setArr(arr1)
    }

    

    console.log("it is arr ", arr)
    const sendMessage = () => {
        setArr([])
        const Senderemail = user.email;
        const reciverEmail = users.email;
        const time = new Date()
        const information = {
            Senderemail, reciverEmail,
            time, messages, reply
        }

        axiosCommon.post('/postMessage', information)
            .then(res => {
                console.log(res.data)
                setMessages('');
            })
    }

    const handleDelete = (id: any) => {
        setArr([])
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosCommon.delete(`/deleteMessage/${id}`)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }
    return (
        <div className="h-[100vh] w-full flex flex-col">
            <div className="min-h-[50px] w-full border-[2px] border-gray-400 mx-auto bg-white p-2 px-4 flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                    <img src={users.image_url} alt="" className="w-[55px] h-[55px] rounded-[50%]" />
                    <h1 className="font-medium text-[15px]">{users.name}</h1>
                </div>
                <FaPhone className="text-xl text-black"></FaPhone>
            </div>
            <div className="flex-grow w-full overflow-y-auto bg-gray-100 p-3">

                {allMesage.length > 0 ? (
                    allMesage.map((info: any, index: number) => (
                        info.Senderemail === user?.email ? (
                            <div key={index} className="bg-[#dcf8c6] my-2 ml-auto w-[350px] md:w-[500px] rounded-md p-2">
                                <div className="flex justify-between">
                                    <h1 className="font-medium text-[14px]">You</h1>
                                    <button onClick={() => {
                                        handelArr(info._id);
                                    }} className="relative">
                                        <div
                                            className={`${arr.includes(info._id) ? "w-[140px] p-2 absolute top-1 right-[50px] bg-white h-[160px]" : "hidden"}`}
                                        >
                                            <button onClick={()=>{
                                                if(arr.length>0){
                                                    setArr([])
                                                    console.log(arr)
                                                }
                                                
                                            }}><FaPlus className="rotate-45 text-red-400"></FaPlus></button>
                                            <button onClick={() => {
                                                handleDelete(info._id)
                                            }} className="w-full"> <div className="flex w-full items-center justify-between">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-red-400 "
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                    <span className="font-normal text-[15px]">Delete</span>
                                                </div></button>
                                            <div className="flex w-full justify-between my-4 items-center">
                                                <button onClick={() => {
                                                    setBol(true)
                                                    setReply(`${info.messages}`);
                                                    setArr([])
                                                }} className="flex w-full justify-between items-center">
                                                    <FaReply></FaReply>
                                                    <span className="font-normal text-[15px]">Reply</span>
                                                </button>
                                            </div>
                                            <button className="w-full"><div className="w-full flex items-center justify-between">
                                                <FaSave></FaSave>
                                                <span className="font-normal text-[15px]">Save</span>
                                            </div></button>
                                        </div>
                                        <FaEllipsisV />
                                    </button>
                                </div>
                                {info?.messages}
                            </div>
                        ) : (
                            <div key={index} className="w-[350px] text-[14px] my-2 md:w-[500px] mr-auto shadow-md bg-white rounded-md p-2">
                                <div className="flex justify-between">
                                    <h1 className="font-medium text-[14px]">{users.name}</h1>
                                    <button onClick={() => {
                                        handelArr(info._id);
                                    }} className="relative">
                                        <div
                                            className={`${arr.includes(info._id) ? "w-[140px] p-2 absolute top-1 right-[50px] bg-white h-[160px]" : "hidden"}`}
                                        >
                                            <button onClick={()=>{
                                                if(arr.length>0){
                                                    setArr([])
                                                    console.log(arr)
                                                }
                                                
                                            }}><FaPlus className="rotate-45 text-red-400"></FaPlus></button>
                                            <button onClick={() => {
                                                handleDelete(info._id)
                                            }} className="w-full"> <div className="flex w-full justify-between items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-red-400"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                    <span className="font-normal text-[15px]">Delete</span>
                                                </div></button>
                                            <button className="w-full">
                                                <div className="flex w-full justify-between my-4 items-center">
                                                    <button onClick={() => {
                                                        setBol(true)
                                                        setReply(`${info.messages}`);
                                                        setArr([])
                                                    }} className="flex w-full justify-between items-center">
                                                        <FaReply></FaReply>
                                                        <span className="font-normal text-[15px]">Reply</span>
                                                    </button>
                                                </div>
                                            </button>
                                            <button className="w-full"><div className="w-full flex items-center justify-between">
                                                <FaSave></FaSave>
                                                <span className="font-normal text-[15px]">Save</span>
                                            </div></button>
                                        </div>
                                        <FaEllipsisV />
                                    </button>
                                </div>
                                {info?.messages}
                            </div>
                        )
                    ))
                ) : (
                    <div className="text-center text-gray-500 p-2">
                        No messages to display.
                    </div>
                )}

            </div>
            <div className="w-full relative">
                <div className={`${bol ? "absolute w-full bottom-14 bg-white pl-2 opacity-70" : "hidden"}`}>{reply}
                    <button onClick={()=>{
                        setReply("")
                        setBol(false)
                    }} className="w-[30px]">
                        <FaPlus className="rotate-45 mt-3 ml-3"></FaPlus>
                    </button>
                </div>
                <input value={messages} onChange={(e: any) => setMessages(e.target.value)} type="text" name="message" placeholder="Message Start" className="pl-3 w-full h-[45px] 
            md:h-[55px] bg-white border-gray-400 border-[2px] " />
                <button onClick={() => {
                    sendMessage()
                    setBol(false)
                }} className="absolute right-0 top-3"><div className="p-2 right-0">
                        <FaPaperPlane className="text-gray-300 text-2xl rotate-45"></FaPaperPlane>
                    </div></button>
            </div>
        </div>
    )
}
export default IndividualMessage