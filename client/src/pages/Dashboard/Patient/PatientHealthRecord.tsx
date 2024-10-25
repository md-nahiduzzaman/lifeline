import React from "react";

interface HealthRecord {
  date: string;
  diagnosis: string;
  treatment: string;
  medications: string[];
  doctor: string;
  bloodPressure: string;
  bloodTestResults: {
    hemoglobin: string;
    whiteBloodCells: string;
    platelets: string;
  };
  diabeticStatus: string;
  weight: string;
}

const PatientHealthRecord: React.FC = () => {
  const healthRecords: HealthRecord[] = [
    {
      date: "2024-09-01",
      diagnosis: "Common Cold",
      treatment: "Rest, Hydration, and Medication",
      medications: ["Paracetamol", "Cough Syrup"],
      doctor: "Dr. John Doe",
      bloodPressure: "120/80 mmHg",
      bloodTestResults: {
        hemoglobin: "13.5 g/dL",
        whiteBloodCells: "6,000 /µL",
        platelets: "250,000 /µL",
      },
      diabeticStatus: "Non-Diabetic",
      weight: "70 kg",
    },
    {
      date: "2024-08-15",
      diagnosis: "High Blood Pressure",
      treatment: "Lifestyle Changes, Medication",
      medications: ["Amlodipine", "Aspirin"],
      doctor: "Dr. Jane Smith",
      bloodPressure: "145/90 mmHg",
      bloodTestResults: {
        hemoglobin: "14.2 g/dL",
        whiteBloodCells: "5,800 /µL",
        platelets: "240,000 /µL",
      },
      diabeticStatus: "Pre-Diabetic",
      weight: "72 kg",
    },
    {
      date: "2024-07-23",
      diagnosis: "Mild Allergic Reaction",
      treatment: "Antihistamines, Avoidance of Allergen",
      medications: ["Cetirizine"],
      doctor: "Dr. Emily Davis",
      bloodPressure: "118/75 mmHg",
      bloodTestResults: {
        hemoglobin: "13.8 g/dL",
        whiteBloodCells: "6,200 /µL",
        platelets: "230,000 /µL",
      },
      diabeticStatus: "Non-Diabetic",
      weight: "69 kg",
    },
  ];

  return (
    <div className="mx-auto mt-8 ">
      <h1 className="mb-6 text-2xl font-bold">Patient Health Record</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Medications</th>
              <th>Blood Pressure</th>
              <th>Blood Test Results</th>
              <th>Diabetic Status</th>
              <th>Weight</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {healthRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.diagnosis}</td>
                <td>{record.treatment}</td>
                <td>{record.medications.join(", ")}</td>
                <td>{record.bloodPressure}</td>
                <td>
                  <ul>
                    <li>Hemoglobin: {record.bloodTestResults.hemoglobin}</li>
                    <li>WBC: {record.bloodTestResults.whiteBloodCells}</li>
                    <li>Platelets: {record.bloodTestResults.platelets}</li>
                  </ul>
                </td>
                <td>{record.diabeticStatus}</td>
                <td>{record.weight}</td>
                <td>{record.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientHealthRecord;
