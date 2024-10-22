import { useContext, useEffect, useState } from "react"
import AddPresaipationTb from "./AddPresaipationTb";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import { AuthContext } from "../../../../providers/AuthProvider";
interface patients{
    _id: string;    
    name: string;       
    gender: string;     
    number: string;    
    address: string;    
    doctor: string;     
    admittedDate: string; 
    status: string;
    email:string;
    img:string
  }
  
const AddPrescription = () => {
    const [appointment,setAppointment]=useState<patients[]>([])
    const axiosCommon=useAxiosCommon()
const {user}=useContext(AuthContext)
console.log(appointment)
useEffect(()=>{
axiosCommon.get(`/approve-appionment?email=${user?.email}`).then(res=>{
  setAppointment(res.data)
  console.log(res.data)
}).catch(error=>{
  console.log(error)
})

},[])

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
             prescription
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
                 Date & Time
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                >
                      Mobile
                </th>

                <th scope="col" className=" py-3.5 px-4  text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
              Add prescription
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            
            {
              appointment.map((patient,index)=><AddPresaipationTb key={index}  patient={patient} index={index}></AddPresaipationTb>)
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AddPrescription
