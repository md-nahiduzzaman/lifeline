import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"

const PaymentHistory = () => {
   const{user}=useContext(AuthContext)
    const axiosCommon=useAxiosCommon()
const {data}=useQuery({
    queryKey:['payment-history'],
    queryFn:async()=>{
        const {data}=await axiosCommon.get(`/UP-history?email=${user.email}`)
        return data
    }
})

  return (
    <div>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#06B6D4] text-white">
      <tr>
       <th></th>
        <th>Full Name</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Package Name</th>
        <th>Email</th>
        <th>Date and Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
 {
    data?.map((history:any,index:number)=> <tr key={index}>
    <th>
    {index+1}
    </th>
    <td>
     {history?.fullNmae
}
    </td>
    <td>
    ${history?.price
}
    </td>
    <td>
    {history?.transactionId}
    </td>
   <td>
    {history?.packageName}
   </td>
   <td>
    {history?.email}
   </td>
   <td>
    {history?.date}
   </td>
  </tr> )
 }
     
      {/* row 2 */}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default PaymentHistory
