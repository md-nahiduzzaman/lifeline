import React from "react"
import { MdDelete } from "react-icons/md";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Swal from "sweetalert2";
const MyAppointmentTb :React.FC<any>= ({appionmnet,index,refetch}) => {
  const axiosCommon=useAxiosCommon()
  console.log(appionmnet,index)

  const handileClickDelete=(id:string)=>{
console.log(id)
axiosCommon.delete(`/appoinment-delete/${id}`).then(res=>{
  console.log(res.data)
  if(res.data.deletedCount){
    Swal.fire({
      title: "Deleted!",
      text: "Your appointment has been deleted.",
      icon: "success"
    });
    refetch()
  }
}).catch(error=>{
  console.log(error)
})
  }
  return (
    <tr>
         <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {index+1}
            </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div className="inline-flex items-center gap-x-3">
               
                    <div className="flex items-center gap-x-2">
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={ appionmnet?.doctorImage}
                        alt="doctor "
                      />
                      <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">
                       { appionmnet?.doctorName}
                        </h2>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <p className={ appionmnet?.status==='approved'?'text-emerald-500  px-3 py-2 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800':appionmnet?.status==="rejected"?'px-3 text-center py-2 text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60': appionmnet?.status=='pending'?'bg-yellow-100 text-[#FFC107] px-3 text-center py-2 rounded-full':''}>{appionmnet?.status}</p>
                </td>

                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                 { appionmnet?.doctorEmail}
                </td>

                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                 { appionmnet?.appiontmentDate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                 { appionmnet?.selectedTimeSlot}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
               <button onClick={(()=> handileClickDelete(appionmnet?._id))} className="p-1  bg-red-600 rounded-full">
               <MdDelete className="text-3xl text-white" />
               </button>
                </td>
              </tr>
   
  )
}

export default MyAppointmentTb
