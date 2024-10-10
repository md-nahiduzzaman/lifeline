import { useQuery } from "@tanstack/react-query"
import ServiceCart from "./ServiceCart"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
const HServiceCard = () => {
  const axiosCommon=useAxiosCommon()
    const {data}=useQuery({
        queryKey:['homeservice-card'],
        queryFn:async()=>{
const {data}=await axiosCommon.get('/hsService-card')
return data
        }
    })
    console.log(data)
  return (
    <div className="my-[110px] max-w-screen-xl mx-auto">
      <h2 className="text-xl font-bold text-[#06B6D4]">Exclusive Home Care Services</h2>
     <div className="grid lg:grid-cols-3 mt-7 md:grid-cols-2 grid-cols-1 gap-7">
        {
            data?.map((card:any)=><ServiceCart key={card._id} card={card}></ServiceCart>)
        }
     </div>
    </div>
  )
}

export default HServiceCard
