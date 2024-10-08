import { useEffect, useState } from "react"

import Marquee from "react-fast-marquee"
const DrCart=()=>{
    const [info,setInfo]=useState<any>([])
    useEffect(()=>{
        fetch('/blog.json')
        .then((res:any)=>{
            return res.json()
        })
        .then((data:any)=>{
            console.log(data)
             setInfo(data)
        })
    },[])
  return(

    <div className="w-[96%] mx-auto">
          <div className="my-14">
            <h1 className="text-center text-3xl font-medium">Meet Our Expert Medical Professionals</h1>
            
                 <Marquee><p className="text-center mt-3 font-medium
                 text-[17px]">Discover our team of highly qualified doctors, each specializing in diverse fields, dedicated to providing exceptional
                 healthcare and  personalized patient care for a healthier and happier life.</p></Marquee>
          </div>
          <div className="grid lg:grid-cols-2 gap-3 my-12">
              {
                info.map((drInfo:any)=><div className="mx-auto rounded-md w-[340px] p-2 py-4 md:w-[540px]
                 border-2 border-black flex flex-col md:flex-row gap-2
                 transform transition-transform duration-300 hover:scale-105">
                       <div>
                        <img src={drInfo.img} className="block mx-auto w-[160px] h-[160px]" alt="" />
                        </div>
                        <div className="">
                           <h1 className="mb-2  text-xl text-left font-medium">{drInfo.name}</h1>
                           <div className="flex">
                            <h1 className="text-[15px] font-medium text-left">{drInfo.degrees[0]},</h1>
                            <h1 className="text-[15px] font-medium ml-1 text-left">{drInfo.degrees[1]}</h1>
                            
                           </div>
                           <h1 className="font-medium text-[15px] my-2 text-left">{drInfo.medical_college}</h1>
                           <h1 className="font-medium text-[15px] text-left">Time:{drInfo.time}</h1>
                           <button className="text-[16px] font-medium w-[170px] rounded-lg h-[36px] bg-cyan-100 block mt-2">Details</button>
                        </div>
                </div>)
              }
          </div>
    </div>
  )
}
export default DrCart