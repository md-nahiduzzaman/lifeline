import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calender/calenderCustomStyles.css";

interface BookAppointmentModalProps {
  isOpen: boolean;
  closeModal: () => void;
  bookingInfo: string; // e.g., doctor's name
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  closeModal,
  bookingInfo,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const timeSlots = [
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 01:00 PM",
  ];

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
          {/* Doctor Info */}
          <div className="flex items-center pb-4 mb-6 space-x-4 border-b">
            <div className="w-16 h-16">
              <img
                src="https://via.placeholder.com/100" // Replace with dynamic doctor image
                alt="Doctor"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{bookingInfo}</h2>
              <p className="text-sm text-gray-500">Neurologist</p>{" "}
              {/* Replace with actual specialty */}
            </div>
          </div>

          {/* Appointment Booking Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 ">
            {/* Calendar Section */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-700">
                Select Date
              </h3>
              <Calendar
                onChange={(date) => setSelectedDate(date as Date)}
                value={selectedDate}
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
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    className={`py-3 text-sm text-center transition duration-150 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-blue-500 focus:text-white ${
                      selectedTimeSlot === slot ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Date and Time Summary */}
          <div className="pt-4 mt-6 border-t">
            <h4 className="text-lg font-medium text-gray-700">
              Selected Date & Time
            </h4>
            <div className="flex items-center mt-2 space-x-2">
              <span className="text-gray-600">
                {selectedDate
                  ? selectedDate.toDateString()
                  : "No date selected"}
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">
                {selectedTimeSlot || "No time slot selected"}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-8 space-x-4">
            <button
              className="px-5 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default BookAppointmentModal;
