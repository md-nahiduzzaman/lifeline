import React from "react"

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
interface patientProps{
    patient:patients;
index:number,
handileClickApprove:(_id: string)=>void,
handileClickRjects:(_id:string)=>void
}
const DrAppointmenttable:React.FC<patientProps> = ({patient,index,handileClickApprove,handileClickRjects}) => {
    const {name,email,admittedDate,number,status,_id,img}=patient
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
                        src={img}
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

                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <p className={status==='approved'?'text-emerald-500  px-3 py-2 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800':status==="rejected"?'px-3 text-center py-2 text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60': status=='pending'?'bg-yellow-100 text-[#FFC107] px-3 text-center py-2 rounded-full':''}>{status}</p>
                </td>

                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                 {email}
                </td>

                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                 {admittedDate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {number}
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                {
                  status==='approved'? <button  className="text-white p-2 disabled  btn-disabled rounded-full bg-gray-400 transition-colors duration-200 hover:text-neutral focus:outline-none">Approve</button>:<button  onClick={()=>{
                    if (handileClickApprove) {
                      handileClickApprove(_id); 
                    }
                                      }} className="text-white p-2 rounded-full bg-[#06B6D4] transition-colors duration-200 hover:text-neutral focus:outline-none">
                                      Approve
                                      </button>
                }
                  
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                 
                {
                  status==='rejected'? <button  className="text-white p-2 disabled  btn-disabled rounded-full bg-gray-400 transition-colors duration-200 hover:text-neutral focus:outline-none">Approve</button>:<button  onClick={()=>{
                    if ( handileClickRjects) {
                      handileClickRjects(_id); 
                    }
                                      }} className="text-white p-2 rounded-full bg-red-500 transition-colors duration-200 hover:text-neutral focus:outline-none">
                                     Reject
                                      </button>
                }
                </td>

              </tr>)
   
}

export default DrAppointmenttable
