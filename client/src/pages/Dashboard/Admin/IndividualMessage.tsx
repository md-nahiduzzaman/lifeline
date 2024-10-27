import { useParams } from "react-router-dom"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useContext, useEffect, useState } from "react"

import { FaPaperPlane, FaPhone } from "react-icons/fa6"
import io from "socket.io-client";
import { AuthContext } from "../../../providers/AuthProvider";
const socket = io("https://lifeline-rouge.vercel.app/")
const IndividualMessage = () => {
    const { user } = useContext(AuthContext);
    const [messages, setMessages] = useState<any>([]);
    const [newMessage, setNewMessage] = useState<any>("");

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
    const [users, setUser] = useState<any>({})
    console.log(messages)
    useEffect(() => {
        axiosCommon.get(`/admin/${id}`)
            .then(res => setUser(res.data))
    }, [id])

    if (user && users) {
        useEffect(() => {
            socket.emit("getMessages", { userEmail: user.email, contactEmail: users.email });

            socket.on("messageHistory", (messageHistory) => {
                setMessages(messageHistory); // Set sorted messages from history
            });

            socket.on("messageReceived", (message: any) => {
                setMessages((prevMessages: any) => [...prevMessages, message]); // Append new message to messages list
            });

            return () => {
                socket.off("messageHistory");
                socket.off("messageReceived");
            };
        }, [user.email, users.email])
    }

    const sendMessage = () => {
        if (!newMessage.trim()) return;

        const messageData = {
            Senderemail: user.email,
            reciverEmail: users.email,
            Message: newMessage,
            time: new Date().toISOString(),
        };

        socket.emit("sendMessage", messageData);
        setNewMessage("");
    }
    return (
        <div className="h-[100vh] w-full flex flex-col">
            <div className="min-h-[50px] w-full border-[2px] border-gray-400 mx-auto bg-white p-2 px-4 flex justify-between items-center">
                <img src={users.image_url} alt="" className="w-[55px] h-[55px] rounded-[50%]" />
                <FaPhone className="text-xl text-black"></FaPhone>
            </div>
            <div className="flex-grow w-full overflow-y-auto bg-gray-200 p-3">
                
               
                {messages.length > 0 ? (
                    messages.map((info: any, index: number) => (
                        info.Senderemail === user?.email ? (
                            <div key={index} className="bg-[#dcf8c6] ml-auto w-[350px] md:w-[500px] rounded-md p-2">
                                <h1 className="font-medium">You</h1>
                                {info?.Message}
                            </div>
                        ) : (
                            <div key={index} className="w-[350px] md:w-[500px] mr-auto shadow-md bg-white rounded-md p-2">
                                <h1 className="font-medium">{users?.name}</h1>
                                {info?.Message}
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
                <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} type="text" name="message" placeholder="Message Start" className="pl-3 w-full h-[45px] 
            md:h-[55px] bg-white border-gray-400 border-[2px] " />
                <button onClick={sendMessage} className="absolute right-0 top-3"><div className="p-2 right-0">
                    <FaPaperPlane className="text-gray-300 text-2xl rotate-45"></FaPaperPlane>
                </div></button>
            </div>
        </div>
    )
}
export default IndividualMessage