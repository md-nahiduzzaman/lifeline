
const SolutionsBanner = () => {
  return (
    <div className=" w-full  bg-cover bg-center h-[450px] lg:h-[650px] grid items-center bg-[linear-gradient(rgb(0,0,0,0.6),rgba(0,0,0,0.6)100%),url(https://img.freepik.com/free-photo/medium-shot-smiley-doctor-patient-chatting_23-2149351657.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid)]">
       <div className="max-w-screen-xl mx-auto lg:w-4/5 p-2">
       <span className="text-xl border-b-2 pb-2 pr-12 text-[#5dEB4B] font-bold">
       The Most Trusted</span>
      <h2 className="text-3xl lg:text-7xl  mt-4 lg:mt-8 font-extrabold text-white "> Healthcare <br /> Management with <br />Innovative Solutions</h2>
      <p className="text-white mt-4 lg:mt-8 lg:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam adipisci assumenda sit exercitationem itaque perspiciatis natus ex? Corporis voluptatem natus eos enim, necessitatibus tempore consectetur quas explicabo, iste distinctio neque error laboriosam soluta, ratione magnam inventore velit doloribus dolorem?</p>
      <div className="mt-6 lg:mt-10 flex gap-14">
        <button className="btn bg-[#23085A] border-none  text-white">Booking now</button>
        <button className="btn bg-transparent text-white border-[#23085A]">Learning more</button>
      </div>
     </div>
    </div>
  )
}

export default SolutionsBanner
