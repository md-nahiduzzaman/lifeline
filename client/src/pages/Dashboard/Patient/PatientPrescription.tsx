import React from "react";

interface Prescription {
  date: string;
  doctor: string;
  diagnosis: string;
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
  }[];
  notes: string;
}

const PatientPrescription: React.FC = () => {
  const prescriptions: Prescription[] = [
    {
      date: "2024-10-05",
      doctor: "Dr. John Doe",
      diagnosis: "Migraine",
      medications: [
        {
          name: "Ibuprofen",
          dosage: "200 mg",
          frequency: "Twice a day",
          duration: "7 days",
        },
        {
          name: "Sumatriptan",
          dosage: "50 mg",
          frequency: "As needed",
          duration: "Until relieved",
        },
      ],
      notes: "Take medication with food. Stay hydrated and rest.",
    },
    {
      date: "2024-09-15",
      doctor: "Dr. Emily Davis",
      diagnosis: "Seasonal Allergy",
      medications: [
        {
          name: "Cetirizine",
          dosage: "10 mg",
          frequency: "Once a day",
          duration: "14 days",
        },
        {
          name: "Fluticasone Nasal Spray",
          dosage: "2 sprays",
          frequency: "Twice a day",
          duration: "10 days",
        },
      ],
      notes: "Avoid allergens and use air purifiers.",
    },
  ];

  return (
    <div className="mx-auto mt-8 ">
      <h1 className="mb-6 text-2xl font-bold">Patient Prescription</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Doctor</th>
              <th>Diagnosis</th>
              <th>Medications</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription.date}</td>
                <td>{prescription.doctor}</td>
                <td>{prescription.diagnosis}</td>
                <td>
                  <ul>
                    {prescription.medications.map((medication, medIndex) => (
                      <li key={medIndex}>
                        <strong>{medication.name}</strong> - {medication.dosage}
                        , {medication.frequency}, for {medication.duration}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{prescription.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPrescription;
