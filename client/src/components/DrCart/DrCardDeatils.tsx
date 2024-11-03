import React, { useState } from "react"
import BookAppointmentModal from "../Dashboard/Modal/BookAppointmentModal"
import { FaStar } from "react-icons/fa6";
import userRole from "../../hooks/useRole";
import { useNavigate } from "react-router-dom";
const DrCardDeatils:React.FC<any>= ({doctor,isLoading}) => {
    const navigation = useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data } = userRole()
    const handileClick = () => {
        if (data?.status === 'subscribe') {
            setIsOpen(true)
      
          } else {
            return navigation('/package')
          }
    
      }
    const closeModal = () => {
        setIsOpen(false);
      };
    
  return (
 isLoading?<div className="flex w-full flex-col gap-4">
  <div className="flex items-center gap-4">
    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-[250px] w-full"></div>
</div> :<>

  <div className=" max-w-lg bg-white border rounded-lg shadow-sm">
    {/* Doctor Image */}
    <div className="">
      <img
        src={doctor?.image_url} // Using the doctor image prop
        alt={`Dr. ${doctor?.name}`}
        className="object-cover object-center w-full h-[280px] rounded-l-lg"
      />
    </div>

    <div className=" p-4">
      {/* Doctor Info */}
      <div>
        <h1 className="text-2xl font-semibold">{doctor?.name}</h1>
        <p className="pb-2 text-sm text-gray-500">{doctor?.specialty}</p>
      </div>
      <hr />
      {/* Doctor Details */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        {/* Speciality and Degree Section */}
        <p>
          <strong>Specialty:</strong> {doctor?.specialty}
        </p>
        <p className="pb-2">
          <strong>Degree:</strong> {doctor?.degree}
        </p>

        <hr className="pt-2" />

        <div className="flex items-center gap-4 text-gray-500">
          {/* Review Section */}
          <p className="px-3 py-1 text-sm text-blue-500 rounded-full bg-blue-100/60">
            Available: {doctor?.availability}
          </p>
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-500" size={16} />
            {doctor?.rating} ({doctor?.reviews} reviews)
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex mt-4 space-x-2">
        <button
          onClick={handileClick}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg"
        >
          Get Appointment
        </button>

        <button className="px-4 py-2 bg-gray-200 rounded-lg">
          View Profile
        </button>
      </div>
    </div>

    {/* Modal */}
    <BookAppointmentModal
      isOpen={isOpen}
      closeModal={closeModal}
      doctorName={doctor.name}
      doctorEmail={doctor.email}
      doctorImage={doctor.image_url}
      specialty={doctor.specialty}
    />
  </div>
 </>
  )
}

export default DrCardDeatils
