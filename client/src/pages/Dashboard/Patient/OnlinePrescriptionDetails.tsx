import React from "react";

interface Prescription {
  date: string;
  doctor: string;
  diagnosis: string;
  id: string; // unique identifier for each prescription
  medications: {
    medicationName: string;
    dosage: string;
    frequency: string;
    duration: string;
  }[];
}

const OnlinePrescriptionDetails: React.FC = () => {
  const prescriptions: Prescription[] = [
    {
      date: "2024-10-05",
      doctor: "Dr. John Doe",
      diagnosis: "Migraine",
      id: "prescription-1",
      medications: [
        {
          medicationName: "Ibuprofen",
          dosage: "200 mg",
          frequency: "Twice a day",
          duration: "7 days",
        },
        {
          medicationName: "Sumatriptan",
          dosage: "50 mg",
          frequency: "As needed",
          duration: "Until relieved",
        },
      ],
    },
    {
      date: "2024-09-15",
      doctor: "Dr. Emily Davis",
      diagnosis: "Seasonal Allergy",
      id: "prescription-2",
      medications: [
        {
          medicationName: "Cetirizine",
          dosage: "10 mg",
          frequency: "Once a day",
          duration: "14 days",
        },
        {
          medicationName: "Fluticasone Nasal Spray",
          dosage: "2 sprays",
          frequency: "Twice a day",
          duration: "10 days",
        },
      ],
    },
  ];

  const handleView = (id: string) => {
    console.log(`Viewing prescription with id: ${id}`);
    // Handle redirection or modal to view prescription details
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-[#06B6D4] text-center">
        Lifeline
      </h2>
      <p className="mt-4 text-xl font-bold">Lifeline Health Prescriptions</p>
      <p className="mt-4">
        Welcome to your prescription details page. Below is the information for
        your latest prescriptions.
      </p>

      <div className="overflow-x-auto mt-7">
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

      {/* Buy Now button for home delivery */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#06B6D4] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#0a9ba8]">
          Buy Now - Home Delivery
        </button>
      </div>
    </div>
  );
};

export default OnlinePrescriptionDetails;
