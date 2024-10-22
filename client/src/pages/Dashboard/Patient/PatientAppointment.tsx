import { useEffect, useState } from "react";
import DrCard from "../../../components/Dashboard/Card/DrCard";
import axios from "axios";

const PatientAppointment = () => {
  const [doctors, setDoctors] = useState<any[]>([]);

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users?role=doctor`
        );
        setDoctors(response.data);
      } catch (error) {
        console.error("Failed to fetch doctors", error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="space-y-6">
      {/* filter section */}
      <div className="flex items-center p-10 bg-white border rounded-lg shadow-sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl text-[#041e49] font-semibold leading-none tracking-tight">
              Search your doctor here
            </h1>

            <p className="text-sm text-muted-foreground">
              You can search your doctor here
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            {/* Category Dropdown */}
            <div className="relative text-right text-gray-700">
              <select
                name="category"
                id="category"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 transition ease-out bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none hover:bg-gray-100 focus:bg-gray-100 focus:ring-1 focus:ring-gray-100 focus:ring-opacity-50"
              >
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>

            {/* Doctor search by name */}
            <form>
              <div className="flex items-center overflow-hidden border border-gray-300 rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:ring-gray-100">
                <input
                  className="px-6 py-2 text-sm text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent focus:ring-0 focus:bg-gray-100"
                  type="text"
                  name="search"
                  placeholder="Enter Doctor Name"
                  aria-label="Enter Doctor Name"
                />

                <button
                  type="submit"
                  className="mr-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform rounded-md bg-slate-800 hover:bg-gray-300 hover:text-slate-800 focus:bg-gray-100 focus:outline-none btn btn-sm"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Rating filter */}
            <div className="relative text-right text-gray-700">
              <select
                name="rating"
                id="rating"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 transition ease-out bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50"
              >
                <option value="">Filter by Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            {/* Reset button */}
            <button className="px-3 py-1.5 text-white bg-slate-900 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Display Doctor Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {doctors.map((doctor: any) => (
          <DrCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default PatientAppointment;
