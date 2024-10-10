import React, { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
interface presaipationProps{
     medicationName:string;
    dosage:string;
    frequency:string;
    duration:string;
}

interface PatientInfo {
  img: string;
  name: string;
  email: string;
  birthdate: number;
  gender: string;
  number: string;
  address: string;
  blood: string;
  pressure: string;
  pushRate: string;
  weight: string;
  admittedDate: string;
  doctorEmail:string;
  doctorName:string;

}
const AddedPresaipation = () => {
  const navigate=useNavigate()
  const patientInfos=useLoaderData()as PatientInfo
   const [presaipation,setPresaipation]=useState({
    medicationName:'',
    dosage:'',
    frequency:'',
    duration:'',
   })
   const [doctorMessage,setDoctorMessage]=useState({
    drMessage:'',
   })
   const [presaipationData,setPresaipationData]=useState<presaipationProps[]>([])
   const axiosCommon=useAxiosCommon()
    const handileClickPresaipation=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()


setPresaipationData([...presaipationData,presaipation])

    }
const {img,name,email,birthdate,gender,number,address,doctorName,blood,doctorEmail,pressure,pushRate,weight,admittedDate}= patientInfos

const handilePresaipationSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
const presaipationInfo={
  patientName:name,
  patientEmail:email,
  doctorEmail,
  doctorName,
  medicineDeatils:presaipationData,
  age:birthdate,
   gender:gender,
   patientNumber:number,
   address:address,
   admittedDate:admittedDate,
   blood:blood,
   pressure:pressure,
   pushRate:pushRate,
   weight:weight,
   issuDate:new Date(),
   instructions:doctorMessage?.drMessage

}

axiosCommon.post('/add-presaipation',presaipationInfo).then(res=>{
  console.log(res.data)
if(res.data.insertedId){
navigate('/dashboard/AddprescriptionTb')
}
}).catch(error=>{
  console.log(error)
})

console.log(presaipationInfo)
}



  return (
    <div>
      <section className="max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
<div className=" lg:flex gap-6">
  <div className=" lg:w-1/2 ">
  <div className="flex gap-4">
  <img className="w-24 h-24 p-1 rounded-full" src={img} alt="" />
  <h2 className="text-xl font-bold text-[#06B6D4]">Patient information</h2>
  </div>
 <div className="mt-6">
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis quaerat nesciunt consectetur, deleniti sit. Quas autem ea totam, accusantium aperiam modi veniam explicabo. Doloremque necessitatibus culpa explicabo laboriosam et ratione eius quae ab est exercitationem, facilis, voluptate hic aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus labore amet mollitia quae ex</p>
 </div>
  </div>
  <div className="flex lg:w-1/2 gap-12">
   <div>
   <p>Name </p>
   <p className="my-3">Date of Birth </p>
    <p>Gender</p>
    <p className="my-3">Blood group</p>
    <p>Blood pressure</p>
    <p className="my-3">Push Rate</p>
    <p>Weight</p>
    <p className="my-3">Contact Email</p>
    <p>Contact Number</p>
    <p className="mt-3">Address</p>
   </div>
   <div>
   <p>{name} </p>
   <p className="my-3">{birthdate}</p>
    <p>{gender}</p>
    <p className="my-3">{blood}</p>
    <p>{pressure}</p>
    <p className="my-3">{pushRate}</p>
    <p>{weight}</p>
    <p className="my-3">{email}</p>
    <p>{number}</p>
    <p className="mt-3">{address}</p>
   </div>
  </div>
</div>

 <div className="mt-6">
    <div className="overflow-x-auto">
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
    {
        presaipationData.map((pres,index)=> <tr key={index}>
        <th>{index+1}</th>
        <td className="text-sm">{pres.medicationName}</td>
        <td className="text-sm">{pres.dosage}</td>
        <td className="text-sm">{pres.frequency}</td>
        <td className="text-sm">{pres.duration}</td>
      </tr>
       )
    }
     
    </tbody>
  </table>
</div>
 </div>

<div className="bg-[#ECFEFF] py-10 px-8 mt-6">
<form onSubmit={handileClickPresaipation} className="">
        <div className="grid lg:grid-cols-5 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Medication Name</label>
                <input  onChange={(e)=>setPresaipation({...presaipation,medicationName:e.target.value})}
                    id="username" 
                    type="text" 
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" 
                />
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Dosage</label>
                <input  onChange={(e)=>setPresaipation({...presaipation,dosage:e.target.value})}
                    id="emailAddress" 
                    type="text" 
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" 
                />
            </div>

            <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Frequency</label>
            <select required onChange={(e)=>setPresaipation({...presaipation,frequency:e.target.value})} defaultValue={"Once a day"} className="select select-bordered w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
  <option disabled selected>add frequency</option>
  <option>Once a day</option>
  <option>Twice a day</option>
  <option>Three times a day</option>
  <option>Four times a day</option>
</select>
            </div>


            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Duration</label>
                <select required  onChange={(e)=>setPresaipation({...presaipation,duration:e.target.value})} defaultValue={"3 days"} className="select select-bordered w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
  <option disabled selected>add frequency</option>
  <option>3 days</option>
  <option>5 days</option>
  <option>7 days</option>
  <option>10 days</option>
  <option>14 days (2 weeks)</option>
  <option>21 days (3 weeks)</option>
  <option>1 month</option>
  <option>2 months</option>
  <option>Until symptoms improve</option>
  <option>As directed by the doctor</option>
</select>
            </div>
            <div className="flex justify-end mt-6">
            <button type="submit" className="px-8 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
        </div>
      
    </form>
    <div>
      <form action="" onSubmit={handilePresaipationSubmit}>
      <div>
    <label htmlFor="Description" className="block text-sm text-gray-500 dark:text-gray-300 mt-6">Instructions</label>

    <textarea 
        placeholder="lorem..." 
        name="name"
        onChange={(e)=>setDoctorMessage({...doctorMessage,drMessage:e.target.value})}
        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
    ></textarea>
    
    <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
<div className="flex justify-end ">
            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#06B6D4] rounded-md hover:bg-blue-600 focus:outline-none focus:bg-gray-600">Submit Now</button>
        </div>
      </form>
    </div>
</div>
   
</section>

    </div>
  )
}

export default AddedPresaipation