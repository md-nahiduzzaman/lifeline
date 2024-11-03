import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useQuery } from "@tanstack/react-query"
import MyAppointmentTb from "./MyAppointmentTb"

const MyAppointment = () => {
  const {user}=useContext(AuthContext)
  const axiosCommon =useAxiosCommon()
  const {data,refetch}=useQuery<any>({
    queryKey:['my-all-appiontment',user?.email,axiosCommon],
    queryFn:async()=>{
      const {data}=await axiosCommon.get(`/my-appiontments?email=${user?.email}`)
      return data
    }
  })

  console.log(data)
  return (
    <div>
   <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className=" bg-[#06B6D4] text-white">
              <tr>
                <th></th>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                  <div className="flex items-center gap-x-3">
                    <span>Doctor Name</span>
                  </div>
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                Doctor Email
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                 Date 
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                 Time
                </th>
                <th scope="col" className=" py-3.5 px-4  text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
            Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
         {
          data?.map((appoinment:any,index:number)=><MyAppointmentTb key={index} index={index} refetch={refetch} appionmnet={appoinment}></MyAppointmentTb>)
         }
            </tbody>
          </table>
    </div>
  )
}

export default MyAppointment
