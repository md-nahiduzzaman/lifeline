
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { AuthContext } from "../../../providers/AuthProvider";
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  careType: string;
  startDate: string;
  notes: string;
}

const HSCardDetails: React.FC = () => {
  const navigates=useNavigate()
  const axiosCommon=useAxiosCommon()
  const serviceData = useLoaderData() as any;
  const {user}=useContext(AuthContext)
  console.log(serviceData);
const {details}=serviceData
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    careType: '',
    startDate: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to an API)
   const { fullName,
    email,
    phone,
    address,
    careType,
    startDate,
    notes}=formData as any 

    const formDataInfo={ 
      fullName,
      email,
      phone,
      address,
      careType,
      startDate,
      notes,
      userEmail:user.email,
      userName:user.displayName,
      currentdate:new Date ()
    }
    axiosCommon.post('/Booking-HS',formDataInfo).then(res=>{
      console.log(res.data)

      if(res.data.insertedId){
navigates('/home-service')
      }
    }).catch(error=>{
      console.log(error)
    })
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10 ">
     <section className="lg:w-1/2 p-6 mx-auto bg-[#23085A] text-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold t capitalize ">Providers your deatils </h2>

      <form onSubmit={handleSubmit} >
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* Full Name Input */}
          <div>
            <label className="" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Email Address Input */}
          <div>
            <label className="" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="" htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Address Input */}
          <div>
            <label className="" htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Care Type Input */}
          <div>
            <label className="" htmlFor="careType">Care Type Needed</label>
            <select
              id="careType"
              name="careType"
              value={formData.careType}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
                <option value="" disabled>Select care type needed</option>
              {
                details?.servicesIncluded?.map((options:any,index:number)=><option key={index} value={options}>{options}</option>)

              }
            
            </select>
          </div>

          {/* Start Date Input */}
          <div>
            <label className="" htmlFor="startDate">Preferred Start Date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Additional Notes Input */}
          
        </div>
        <div className="w-full mt-6">
  <label htmlFor="description" className="block text-sm">
    Description
  </label>

  <textarea
    id="notes"
   name="notes"
  value={formData.notes}
  onChange={handleChange}
    placeholder="lorem..."
    className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
  ></textarea>
</div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#5dEB4B] rounded-md hover:bg-[#06B6D4]focus:outline-none focus:bg-[#06B6D4]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
    </div>
  );
};

export default HSCardDetails;
