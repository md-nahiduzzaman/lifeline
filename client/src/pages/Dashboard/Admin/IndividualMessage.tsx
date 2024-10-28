import { useParams } from "react-router-dom"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useContext, useEffect, useState } from "react"

import { FaPaperPlane, FaPhone } from "react-icons/fa6"
import { AuthContext } from "../../../providers/AuthProvider"
import { FaEllipsisV } from "react-icons/fa"

const IndividualMessage = () => {
    const [arr, setArr] = useState<any>([])
    const [messages, setMessages] = useState<any>('')
    const [allMesage, setAllmessage] = useState<any>([])
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
    const [users, setUser] = useState<any>({})

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
            }, 2000);

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
        const Senderemail = user.email;
        const reciverEmail = users.email;
        const time = new Date()
        const information = {
            Senderemail, reciverEmail,
            time, messages
        }

        axiosCommon.post('/postMessage', information)
            .then(res => {
                console.log(res.data)
                setMessages('');
            })
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
            <div className="flex-grow w-full overflow-y-auto bg-gray-200 p-3">

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
                                            className={`${arr.includes(info._id) ? (index >= 0 && index <= 2 ? "w-[180px] absolute top-2 right-[50px] bg-white h-[220px]" : "w-[180px] absolute bottom-7 right-[50px] bg-white h-[220px]") : "hidden"}`}
                                        >
                                            {/* Additional content can go here */}
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
                                            className={`${arr.includes(info._id) ? (index >= 0 && index <= 2 ? "w-[180px] absolute top-2 right-[50px] bg-white h-[220px]" : "w-[180px] absolute bottom-7 right-[50px] bg-white h-[220px]") : "hidden"}`}
                                        >
                                            {/* Additional content can go here */}
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
                <input value={messages} onChange={(e: any) => setMessages(e.target.value)} type="text" name="message" placeholder="Message Start" className="pl-3 w-full h-[45px] 
            md:h-[55px] bg-white border-gray-400 border-[2px] " />
                <button onClick={sendMessage} className="absolute right-0 top-3"><div className="p-2 right-0">
                    <FaPaperPlane className="text-gray-300 text-2xl rotate-45"></FaPaperPlane>
                </div></button>
            </div>
        </div>
    )
}
export default IndividualMessage