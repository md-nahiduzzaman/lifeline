
const SolutionsMangment = () => {
  return (
    <div className="bg-[#ECFEFF] py-10">
      <section className="">

  <div className="container h-full flex flex-col gap-6 px-6 mx-auto space-y-6  lg:flex-row lg:items-center">
  <div className="flex items-center mt-6 h-full justify-center w-full lg:w-1/2">
      <img className="object-cover w-full h-[450px]  lg:h-[650px]  mx-auto rounded-md " src="https://media.istockphoto.com/id/1219036868/photo/doctor-visiting-the-patient.jpg?s=612x612&w=0&k=20&c=8IDx3Ae0KPTSgKE2v9RvCOKVWWT1jfFrHKFskl_0emQ=" alt="glasses photo" />
    </div>

    <div className="w-full lg:w-1/2">
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <p className="text-xl font-bold text-[#06B6D4]">ONLINE APPOINMENT</p>
    <h2 className="text-gray-700 capitalize dark:text-white mt-4 text-4xl font-bold">Make an Online Appoinemnt Booking For Treatment Patients</h2>

    <form className="mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Your Name</label>
                <input 
                    id="username" 
                    type="text" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Your E-Mail</label>
                <input 
                    id="emailAddress" 
                    type="email" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Subject</label>
                <input 
                    id="password" 
                    type="password" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Phone Number</label>
                <input 
                    id="passwordConfirmation" 
                    type="password" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
            </div>
        </div>
        <div>
    <label htmlFor="Description" className="block text-sm text-gray-500 dark:text-gray-300 mt-4">Type your message</label>

    <textarea 
        placeholder="lorem..." 
        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
    </textarea>

    <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
</div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#06B6D4] rounded-md hover:bg-[#06B6D4] focus:outline-none focus:bg-gray-600">
              Send message
            </button>
        </div>
    </form>
</section>
      
    </div>

  </div>
</section>

    </div>
  )
}

export default SolutionsMangment
