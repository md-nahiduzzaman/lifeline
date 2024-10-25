import { Dialog } from "@headlessui/react";
import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calender/calenderCustomStyles.css";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Swal from "sweetalert2";

interface BookAppointmentModalProps {
  isOpen: boolean;
  closeModal: () => void;
  doctorName: string; // e.g., doctor's name
  doctorEmail: string; // e.g., doctor's name
  doctorImage:string
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  closeModal,
  doctorEmail,
  doctorName,
  doctorImage
}) => {
  const [selectedDate, setSelectedDate] = useState<any | null>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const axiosCommon=useAxiosCommon()
  const [patientData,setPatientData]=useState({
    birth:"",
    phone:"",
    blood:"",
    weight:"",
    pressure:"",
    gender:"",
    address:"",
    pushRate:"",
    message:""

  })
const {user}=useContext(AuthContext)
  const timeSlots = [
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 01:00 PM",
  ];
  const day = String(selectedDate.getUTCDate()).padStart(2, '0'); // 23
  const month = String(selectedDate.getUTCMonth() + 1).padStart(2, '0'); // 10
  const year = selectedDate.getUTCFullYear(); // 2024
  
  const appiontmentDate = `${day}-${month}-${year}`;
  

const handileClickAppionments=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
console.log(patientData)
const {
   birth,
  phone,
  blood,
  weight,
  pressure,
  gender,
  message, address,
  pushRate,}=patientData as any

  const patientInfo={
    phone,
    blood,
    weight:`${weight}Kg`,
    pressure,
    gender,
    message, 
    birth,
    patientName:user.displayName,
    patientEmail:user.email,
    selectedTimeSlot,
    appiontmentDate,
    doctorEmail,
    doctorName,
    date:new Date (),
    address,
    pushRate,
    image:user.photoURL,
    status:'pending'

  }

  axiosCommon.post('/added-appionments',patientInfo).then(res=>{
    console.log(res.data)
    if(res?.data?.insertedId){
      Swal.fire({
        title: "Good job ",
        text: "Appointment success fullly done",
        icon: "success"
      });

    }
  }).catch(error=>{
    console.log(error)
  })
}
console.log(user)
  return (
    <Dialog open={isOpen} onClose={closeModal}>
    <div className="fixed inset-0 bg-black/30 " aria-hidden="true" />
    <Dialog.Panel className="fixed inset-0 flex items-center justify-center p-4">
      <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg max-h-screen overflow-y-auto">
        {/* Doctor Info */}
        <div className="flex items-center pb-4 mb-4 space-x-4 border-b">
          <div className="w-16  h-16">
            <img
              src={doctorImage}
              alt="Doctor"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{doctorName}</h2>
            <p className="text-sm text-gray-500">Neurologist</p>
          </div>
        </div>
  
        {/* Appointment Booking Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-700">Select Date</h3>
            <Calendar onChange={(date) => setSelectedDate(date as Date)} value={selectedDate} />
          </div>
  
          <div className="divider divider-horizontal"></div>
  
          <div className="flex-1">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">Select Time Slot</h3>
            <div className="flex flex-col gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  className={`py-3 text-sm text-center transition duration-150 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-blue-500 focus:text-white ${
                    selectedTimeSlot === slot ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
  
        {/* Patient Info */}
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <form onSubmit={handileClickAppionments}>
            <div className="grid grid-cols-1 gap-4 mt-2 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Date of Birth</label>
                <input
                  id="password"
                  type="date"
                  onChange={(e)=>setPatientData({...patientData,birth:e.target.value})}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Phone Number</label>
                <input
                  id="passwordConfirmation"
                  type="number"
                  onChange={(e)=>setPatientData({...patientData,phone:e.target.value})}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password"> Blood Group</label>
                <select  onChange={(e)=>setPatientData({...patientData,blood:e.target.value})} className="select select-bordered w-full max-w-xs mt-2">
                <option disabled selected value="">Select Blood Group</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select>

              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Weight</label>
                <input
                  id="passwordConfirmation"
                  type="number"
                  onChange={(e)=>setPatientData({...patientData,weight:e.target.value})}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Blood Pressure </label>
              <select onChange={(e)=>setPatientData({...patientData,pressure:e.target.value})} className="select select-bordered w-full max-w-xs mt-2">
                <option disabled selected value="">Select Blood Pressure</option>
  <option value="low">Low</option>
  <option value="normal">Normal</option>
  <option value="high">High</option>
</select>
              </div>
            
              <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Gender</label>
              <select  onChange={(e)=>setPatientData({...patientData,gender:e.target.value})}  className="select select-bordered w-full max-w-xs mt-2">
                <option disabled selected value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
              </div>
              <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation"> Pulse Rate</label>
              <select  onChange={(e)=>setPatientData({...patientData,pushRate:e.target.value})}  className="select select-bordered w-full max-w-xs mt-2">
              <option value="">Select Pulse Rate</option>
    <option value="low">Low</option>
    <option value="normal">Normal</option>
    <option value="high">High</option>
</select>
              </div>
              <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">address</label>
              <input
                  id="passwordConfirmation"
                  type="text"
                  onChange={(e)=>setPatientData({...patientData,address:e.target.value})}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div>
    <label htmlFor="Description" className="block text-sm text-gray-500 dark:text-gray-300 mt-6">Write your problem</label>

    <textarea 
        placeholder="lorem..." 
        name="name"
        onChange={(e)=>setPatientData({...patientData,message:e.target.value})}
        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
    ></textarea>
    
    <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
    
            <div className="flex justify-end mt-8 space-x-4">
          <button className="px-5 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit" className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Book Now
          </button>
        </div>
          </form>
        </section>
  
        {/* Action Buttons */}
      
      </div>
    </Dialog.Panel>
  </Dialog>
  );
};

export default BookAppointmentModal;
