
import {useContext, useState } from "react"
import DrAppointmenttable from "./DrAppointmenttable"
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { AuthContext } from "../../../providers/AuthProvider";

interface patients{
  _id: string;    
patientName: string;       
  gender: string;     
 phone: string;    
  address: string;    
  doctor: string;     
  appiontmentDate: string; 
  status: string;
 patientEmail:string;
  img:string;
  selectedTimeSlot:string;

}

const DoctorAppointment = () => {
  const axiosCommon=useAxiosCommon()
const [appointment,setAppointment]=useState<patients[]>([])
const {user}=useContext(AuthContext)
const {data,refetch}=useQuery({queryKey:['approve'],
  queryFn:async()=>{
    const res=await axiosCommon.get(`/apppionment-request?email=${user?.email}`)
    setAppointment(res?.data)
    return res.data
  }

})
console.log(data)

const handileClickApprove=(_id:string):void=>{
console.log(_id)
  axiosCommon.patch(`/appionment-approve/${_id}`).then(res=>{
    console.log(res.data)
   refetch()
  }).catch(error=>{
    console.log(error)
  })
}
const handileClickRjects=(_id:string):void=>{
console.log(_id)
  axiosCommon.patch(`/appionment-reject/${_id}`).then(res=>{
    console.log(res.data)
    refetch()
  }).catch(error=>{
    console.log(error)
  })
}

  return (
    <div>
  <section className="container px-4 mx-auto">
  <div className="flex items-center gap-x-3">
    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Appointment</h2>
    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
      {appointment?.length} Patients
    </span>
  </div>

  <div className="flex flex-col mt-6">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block  min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className=" bg-[#06B6D4] text-white">
              <tr>
                <th></th>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                  <div className="flex items-center gap-x-3">
                    <span>Name</span>
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
                  Email
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

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                      Mobile
                </th>

                <th scope="col" className=" py-3.5 px-4  text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
            Action
                </th>
                <th scope="col" className=" py-3.5 px-4  text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                Reject
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            
            {
              appointment.map((patient,index)=><DrAppointmenttable key={index} handileClickApprove={handileClickApprove} handileClickRjects={handileClickRjects}  patient={patient} index={index}></DrAppointmenttable>)
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default DoctorAppointment;
