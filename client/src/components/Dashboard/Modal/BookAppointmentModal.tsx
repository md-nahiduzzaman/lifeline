import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const BookAppointmentModal = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
      {/* Doctor Info */}
      <div className="flex items-center pb-4 mb-6 space-x-4 border-b">
        <div className="w-16 h-16">
          <img
            src="https://via.placeholder.com/100" // Doctor image URL
            alt="Doctor"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Dr. John Doe</h2>
          <p className="text-sm text-gray-500">Neurologist</p>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Calendar Section */}
        <div>
          <DateRange
            showDateDisplay={false}
            rangeColors={["#041e49"]}
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>

        {/* separator */}
        <div className="divider divider-horizontal"></div>

        {/* Time Slot Section */}
        <div className="flex-1">
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Select Time Slot
          </h3>
          <div className="flex flex-col gap-4">
            {/* Time Slots */}
            <button className="py-3 text-sm text-center transition duration-150 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
              11:00 AM - 11:30 AM
            </button>
            <button className="py-3 text-sm text-center transition duration-150 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
              11:30 AM - 12:00 PM
            </button>
            <button className="py-3 text-sm text-center transition duration-150 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
              12:00 PM - 12:30 PM
            </button>
            <button className="py-3 text-sm text-center transition duration-150 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
              12:30 PM - 01:00 PM
            </button>
            {/* Add more time slots as needed */}
          </div>
        </div>
      </div>

      {/* Selected Date and Time Summary */}
      <div className="pt-4 mt-6 border-t">
        <h4 className="text-lg font-medium text-gray-700">
          Selected Date & Time
        </h4>
        <div className="flex items-center mt-2 space-x-2">
          <span className="text-gray-600">Saturday, Oct 23</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-600">12:00 PM</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-8 space-x-4">
        <button className="px-5 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
