import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { RxReader } from 'react-icons/rx';
interface patients{
    id: string;    
    name: string;       
    gender: string;     
    contact: string;    
    address: string;    
    doctor: string;     
    admittedDate: string; 
    status: string ;
    email:string
  }
interface patientProps{
    patient:patients;
index:number
}
const DrManagePatientCard:React.FC<patientProps> = ({patient,index}) => {
    const {name,email,admittedDate,contact,status}=patient
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
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt=""
                      />
                      <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">
                       {name}
                        </h2>
                       
                      </div>
                    </div>
                  </div>
                </td>
<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
<p className={status==='approve'?'text-emerald-500  px-3 py-2 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800':status==="reject"?'px-3 text-center py-2 text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60': status=='pending'?'bg-yellow-100 text-[#FFC107] px-3 text-center py-2 rounded-full':''}>{status}</p>
</td>
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                 {email}
                </td>

                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                 {admittedDate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {contact}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <RxReader className="text-3xl cursor-pointer text-[#06B6D4]" />
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <button>
                  <button className="text-white p-2 rounded-full bg-red-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                    <AiFillDelete className="text-3xl" />
                    </button>
                  </button>
                </td>

              </tr>
  )
}

export default DrManagePatientCard
