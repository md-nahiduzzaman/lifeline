import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import BookAppointmentModal from "../Modal/BookAppointmentModal";

// Define the type for doctor prop
type Doctor = {
  name: string;
  specialty: string;
  degree: string;
  availability: string;
  rating: number;
  reviews: number;
image_url: string;
};

interface DrCardProps {
  doctor: Doctor; // Define the prop type
}

const DrCard: React.FC<DrCardProps> = ({ doctor }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close modal function
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex max-w-lg bg-white border rounded-lg shadow-sm">
      {/* Doctor Image */}
      <div className="w-1/3">
        <img
          src={doctor?.image_url} // Using the doctor image prop
          alt={`Dr. ${doctor.name}`}
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>

      <div className="w-2/3 p-4">
        {/* Doctor Info */}
        <div>
          <h1 className="text-2xl font-semibold">{doctor.name}</h1>
          <p className="pb-2 text-sm text-gray-500">{doctor.specialty}</p>
        </div>
        <hr />
        {/* Doctor Details */}
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          {/* Speciality and Degree Section */}
          <p>
            <strong>Specialty:</strong> {doctor.specialty}
          </p>
          <p className="pb-2">
            <strong>Degree:</strong> {doctor.degree}
          </p>

          <hr className="pt-2" />

          <div className="flex items-center gap-4 text-gray-500">
            {/* Review Section */}
            <p className="px-3 py-1 text-sm text-blue-500 rounded-full bg-blue-100/60">
              Available: {doctor.availability}
            </p>
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" size={16} />
              {doctor.rating} ({doctor.reviews} reviews)
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex mt-4 space-x-2">
          <button
            onClick={() => setIsOpen(true)}
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
        bookingInfo={doctor.name}
      />
    </div>
  );
};

export default DrCard;
