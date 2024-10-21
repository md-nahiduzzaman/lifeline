import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom

interface Prescription {
  date: string;
  doctor: string;
  diagnosis: string;
  id: string; // Added for redirection to specific prescription page
}

const PatientPrescription: React.FC = () => {
  const navigate = useNavigate();

  const prescriptions: Prescription[] = [
    {
      date: "2024-10-05",
      doctor: "Dr. John Doe",
      diagnosis: "Migraine",
      id: "prescription-1", // unique identifier
    },
    {
      date: "2024-09-15",
      doctor: "Dr. Emily Davis",
      diagnosis: "Seasonal Allergy",
      id: "prescription-2", // unique identifier
    },
    // Add more prescriptions here
  ];

  const handleView = (id: string) => {
    navigate(`/prescription/${id}`);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[935px] bg-white shadow rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-700">
            Patient Prescription
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table head */}
            <thead>
              <tr>
                <th></th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{prescription.date}</td>
                  <td>{prescription.doctor}</td>
                  <td>{prescription.diagnosis}</td>
                  <td>
                    <button
                      onClick={() => handleView(prescription.id)}
                      className="text-sm text-white bg-blue-500 btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientPrescription;
