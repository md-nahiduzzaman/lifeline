const PKBanner = () => {
  return (
    <div className="pt-2 bg-[#fbf7f0] mb-[120px]">
     <div className="relative h-[550px] flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-photo/confident-doctor-hospital-room_9975-23116.jpg"
        alt="Doctor in Hospital"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">
          Choose Your Healthcare Plan
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Affordable and Comprehensive Healthcare Services for Everyone
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[#23085A] font-semibold rounded-full hover:bg-gray-200">
          Explore Packages
        </button>
      </div>
    </div>
     </div>
  )
}

export default PKBanner
