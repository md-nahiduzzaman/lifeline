
import { useLoaderData } from 'react-router-dom';
// interface patients{
//     _id: string;    
//     name: string;       
//     gender: string;     
//     number: string;    
//     address: string;    
//     doctor: string;     
//     admittedDate: string; 
//     status: string;
//     patientEmail:string;
//     img:string;
//     pushRate:string;
//   doctorName:string;
//   doctorEmail:string;
//   instructions:string;
//   medicineDeatils:string[]
//   }

const PatientSeePrescription = () => {
    const presInfo=useLoaderData()as any
console.log(presInfo)
    
     
    const medicin=presInfo?.medicineDeatils
  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-[#06B6D4] text-center">Lifeline</h2>
<p className="mt-4 text-xl font-bold">Lifeline Health Prescriptions</p>
<p className="mt-4">{presInfo?.instructions} </p>
  <div>
   <table className="w-full mt-6">
     <tbody>
<tr className="border-t">
<td className="p-2 font-semibold">Patient's Name:</td>
           <td className="p-2">{presInfo?.patientName}</td>
           <td className="p-2 font-semibold">Date:</td>
           <td className="p-2">{presInfo?.admittedDate} </td>
</tr>
<tr className="border-t">
           <td className="p-2 font-semibold">Date of Birth:</td>
           <td className="p-2">{presInfo?.age}</td>
           <td className="p-2 font-semibold">Push Rate:</td>
           <td className="p-2">{presInfo?.pushRate}</td>
           <td className="p-2 font-semibold">Sex:</td>
           <td className="p-2">{presInfo?.gender}</td>
         </tr>
<tr className="border-t">
           <td className="p-2 font-semibold">Phone Number:</td>
           <td className="p-2">{presInfo?.patientNumber}</td>
           <td className="p-2 font-semibold">address:</td>
           <td className="p-2">{presInfo?.address}</td>
          
         </tr>
         <tr className="border-t">
         <td className="p-2 font-semibold">Blood group:</td>
           <td className="p-2">{presInfo?.blood}</td>
           <td className="p-2 font-semibold">Blood pressure:</td>
           <td className="p-2">{presInfo?.pressure}</td>
           <td className="p-2 font-semibold">weight:</td>
           <td className="p-2">{presInfo?.weight}</td>
         </tr>
     </tbody>
   </table>

  </div>
  <div className="overflow-x-auto mt-7">
 <table className="table table-zebra">
   {/* head */}
   <thead className=" bg-[#06B6D4] text-white">
     <tr>
       <th></th>
       <th>Medication Name</th>
       <th>Dosage</th>
       <th>Frequency</th>
       <th>Duration</th>
     </tr>
   </thead>
   <tbody>
   {medicin?.map((pres:any,index:number)=> <tr key={index}>
       <th>{index+1}</th>
       <td className="text-sm">{pres?.medicationName}</td>
       <td className="text-sm">{pres?.dosage}</td>
       <td className="text-sm">{pres?.frequency}</td>
       <td className="text-sm">{pres?.duration}</td>
     </tr>
      )
   }
    
   </tbody>
 </table>

 <p className="mt-12"> Your Comprehensive Guide to Wellness and Care – Thank You for Trusting Us</p>

 <div className="grid justify-end mt-4">
   <p className="">Signature of prescription</p>

   <p className="border-b py-2 ml-6 italic border-blue-400">{presInfo?.doctorName}</p>
 </div>
</div>
   </div>
  )
}

export default PatientSeePrescription
