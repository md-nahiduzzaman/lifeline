import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const DoctorHome = () => {
const {data}=useQuery({
  queryKey:['appionmentslength'],
  queryFn:async()=>{
const {data}=await axios.get('http://localhost:5000/appionment-today')
return data
  }
})

  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-8">
  <div className="stat shadow-md bg-white border border-gray-300 rounded-lg">
    <div className="stat-figure text-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div className="stat-title text-blue-500 text-xl font-semibold">Today Appointments</div>
    <div className="stat-value text-blue-500 my-4">{data?.todayAp}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat shadow-md bg-white border border-gray-300 rounded-lg">
    <div className="stat-figure text-[#FFA500]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div className="stat-title text-[#FFA500] text-xl font-semibold">Pending  Appointments</div>
    <div className="stat-value text-[#FFA500] my-4">{data?.pendingAp}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat shadow-md bg-white border border-gray-300">
    <div className="stat-figure text-secondary">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div className="stat-title text-xl text-secondary font-semibold">All Appointments</div>
    <div className="stat-value my-4 text-secondary">{data?.allAp}</div>
    <div className="stat-desc ">31 tasks remaining</div>
  </div>
</div>
    </div>
  )
}

export default DoctorHome
