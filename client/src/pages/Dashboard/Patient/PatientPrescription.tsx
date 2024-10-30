import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";

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
  const {user}=useContext(AuthContext)
  const axiosCommon=useAxiosCommon()
  const {data}=useQuery({
    queryKey:['all-prescriptions',user?.email,axiosCommon],
    queryFn:async()=>{
const {data}=await axiosCommon.get(`/my-prescriptions?email=${user?.email}`)
return data
    }
  })

  return (
    <div className="mx-auto mt-8 ">
      <h1 className="mb-6 text-2xl font-bold">Patient Prescription</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table head */}
          <thead className=" bg-[#06B6D4] text-white">
            <tr>
              <th></th>
              <th>Doctor Name </th>
              <th>Doctor Email </th>
              <th>Diagnosis</th>
              <th>Issu Date</th>
              <th>Online Prescription</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((prescription:any, index:number) => (
              <tr key={index}>
              <td>{index+1}</td>
                <td>{prescription?.doctorName}</td>
                <td>{prescription?.doctorEmail}</td>
                <td>{prescription?.sspecialty}</td>
                <td>{prescription?.issuDate}</td>
                <td>
                <Link to={`/dashboard/patient-prescription/${prescription?._id}`}><span className="text-blue-500 underline"> see prescription </span></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPrescription;
