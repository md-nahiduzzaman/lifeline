
import { useQuery } from "@tanstack/react-query"
import Marquee from "react-fast-marquee"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import DrCardDeatils from "./DrCardDeatils"
const DrCart=()=>{
  const axiosCommon =useAxiosCommon()
  const {data,isLoading}=useQuery({
    queryKey:['dr-cards',axiosCommon] ,
    queryFn:async()=>{
      const{data}=await axiosCommon.get('/all-dr-card')
      return data
    }
  })
  console.log(data)

  return(

    <div className="max-w-screen-xl mx-auto my-[120px]">
          <div className="my-14">
            <h1 className="text-center text-3xl font-medium">Meet Our Expert Medical Professionals</h1>
            
                 <Marquee><p className="text-center mt-3 font-medium
                 text-[17px]">Discover our team of highly qualified doctors, each specializing in diverse fields, dedicated to providing exceptional
                 healthcare and  personalized patient care for a healthier and happier life.</p></Marquee>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1">

            {data?.map((doctor:any)=><DrCardDeatils key={doctor._id} doctor={doctor} isLoading={isLoading}></DrCardDeatils>)}
          </div>
          
    </div>
  )
}
export default DrCart