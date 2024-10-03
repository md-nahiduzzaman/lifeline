import { IoIosAddCircleOutline } from "react-icons/io";
import { RxReader } from "react-icons/rx";
import { Link } from "react-router-dom";

interface patients{
    id: string;    
    name: string;       
    gender: string;     
    contact: string;    
    address: string;    
    doctor: string;     
    admittedDate: string; 
    status: string;
    email:string
  }
interface patientProps{
    patient:patients;
index:number
}

const AddPresaipationTb:React.FC<patientProps> = ({patient,index}) => {
    const {name,email,admittedDate,contact,status,id}=patient
  return (
    <tr>
    <td className="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
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

        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <Link to={`/dashboard/prescriptionDeatils/${id}`}>
          <button className=" text-[#06B6D4]"><RxReader className="text-3xl " /></button>
          </Link>
   
        </td>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
         {email}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
         {admittedDate}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {contact}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <Link to={`/dashboard/added-prescription/${id}`}>   <button className="flex p-2 items-center gap-1 bg-[#06B6D4] rounded-lg text-white"><IoIosAddCircleOutline className="text-xl " /> Add </button></Link>
    
        </td>
        

      </tr>)

  
}

export default AddPresaipationTb
