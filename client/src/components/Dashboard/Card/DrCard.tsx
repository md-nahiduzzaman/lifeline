import React from "react";
import { FaStar } from "react-icons/fa6";

const DrCard = () => {
  return (
    <div className="flex max-w-lg bg-white border rounded-lg shadow-sm">
      {/* Doctor Image */}
      <div className="w-1/3">
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image URL
          alt="Doctor"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>

      <div className="w-2/3 p-4">
        {/* Doctor Info */}
        <div>
          <h1 className="text-2xl font-semibold">Dr. John Doe</h1>
          <p className="pb-2 text-sm text-gray-500">Cardiologist</p>
        </div>
        <hr />
        {/* Doctor Details */}
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          {/* Speciality and Degree Section */}
          <p>
            <strong>Speciality:</strong> Consultant - Neuromedicine,
            Neurologist, Epileptologist & Neuromuscular Disorder Specialist
          </p>
          <p className="pb-2">
            <strong>Degree:</strong> MBBS, MD (Neurology), BSMMU Fellowship in
            Neuro-electrophysiology (UM, Malaysia)
          </p>

          <hr className="pt-2" />

          <div className="flex items-center gap-4 text-gray-500">
            {/* Review Section */}
            <p className="px-3 py-1 text-sm text-blue-500 rounded-full bg-blue-100/60">
              Available: Sat - Mon
            </p>
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" size={16} />
              4.8 (120 reviews)
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex mt-4 space-x-2">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
            Get Appointment
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrCard;
