
const SolutionAbout = () => {
  return (
    <div className="">
       <div className="my-[120px] bg-[#ECFEFF] lg:py-32">
      <div className="hero min-h-screenbg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className=" lg:w-1/2 md:w-full h-full">
            <img
              src={'https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4='}
              className="h-full rounded-lg w-[80%] shadow-2xl"
            />

            <div className=" ">
              <img
                className="w-1/2 -mt-36 h-full ml-[42%]  "
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRripLcqGUKIBfgbtmux6U1UY9UkgezqzJzFw&s'}
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-1/2 md:-full ">
            <h2 className="text-xl font-bold text-[#06B6D4]">Solutions for Lifeline</h2>
            <h1 className="text-3xl lg:text-5xl  font-bold mt-4 leading-normal">
            Empowering Healthcare Providers with Innovative Solutions
            </h1>
            <p className="py-6 mt-7">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-[#06B6D4] text-white mt-8">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SolutionAbout
