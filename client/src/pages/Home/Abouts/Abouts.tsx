import { FaEarDeaf, FaHeart, FaStethoscope, FaSyringe, FaUserDoctor } from "react-icons/fa6"



const Abouts = () => {

  return (
    <div className=" max-w-screen-xl px-5 lg:px-10 mx-auto my-[150px]">
      <h2 className="text-2xl font-bold text-center mb-12 text-[#23085A]">Why you sould trust us? <br />
        Get know about us</h2>
      <div className="grid gap-y-8 lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1">
        <div className="w-[345px] mx-auto hover:scale-105 hover:border-4 hover:border-green-400 border-2 border-green-200 p-4 rounded-lg">
          <div className="mb-3">
            <FaStethoscope className="text-6xl block mx-auto text-green-400" />
          </div>
          <div>
            <h2 className="font-bold text-center text-[#23085A]">Conductive Hearing Loss</h2>
            <p className="text-center">This type of hearing loss occurs when sound waves are blocked or reduced in the outer or middle ear. It can often be treated through medical procedures.</p>
          </div>
        </div>
        <div className="w-[345px] mx-auto hover:scale-105 hover:border-4 hover:border-green-400 border-2 border-green-200 p-4 rounded-lg">
          <div className="mb-3">
            <FaUserDoctor className="text-6xl block mx-auto text-green-400" />
          </div>
          <div>
            <h2 className="font-bold text-center text-[#23085A]">Conductive Hearing Loss</h2>
            <p className="text-center">This type of hearing loss occurs when sound waves are blocked or reduced in the outer or middle ear. It can often be treated through medical procedures.</p>
          </div>
        </div>
        <div className="w-[345px] mx-auto hover:scale-105 hover:border-4 hover:border-green-400 border-2 border-green-200 p-4 rounded-lg">
          <div className="mb-3">
            <FaSyringe className="text-6xl block mx-auto text-green-400" />
          </div>
          <div>
            <h2 className="font-bold text-center text-[#23085A]">Conductive Hearing Loss</h2>
            <p className="text-center">This type of hearing loss occurs when sound waves are blocked or reduced in the outer or middle ear. It can often be treated through medical procedures.</p>
          </div>
        </div>
        <div className="w-[345px] mx-auto hover:scale-105 hover:border-4 hover:border-green-400 border-2 border-green-200 p-4 rounded-lg">
          <div className="mb-3">
            <FaUserDoctor className="text-6xl block mx-auto text-green-400" />
          </div>
          <div>
            <h2 className="font-bold text-center text-[#23085A]">Conductive Hearing Loss</h2>
            <p className="text-center">This type of hearing loss occurs when sound waves are blocked or reduced in the outer or middle ear. It can often be treated through medical procedures.</p>
          </div>
        </div>
        <div className="w-[345px] mx-auto hover:scale-105 hover:border-4 hover:border-green-400 border-2 border-green-200 p-4 rounded-lg">
          <div className="mb-3">
            <FaEarDeaf className="text-6xl block mx-auto text-green-400" />
          </div>
          <div>
            <h2 className="font-bold text-center text-[#23085A]">Conductive Hearing Loss</h2>
            <p className="text-center">This type of hearing loss occurs when sound waves are blocked or reduced in the outer or middle ear. It can often be treated through medical procedures.</p>
          </div>
        </div>
        <div className="w-[345px] mx-auto hover:scale-105 hover:border-4 hover:border-green-400 border-2 border-green-200 p-4 rounded-lg">
          <div className="mb-3">
            <FaHeart className="text-6xl block mx-auto text-green-400" />
          </div>
          <div>
            <h2 className="font-bold text-center text-[#23085A]">Conductive Hearing Loss</h2>
            <p className="text-center">This type of hearing loss occurs when sound waves are blocked or reduced in the outer or middle ear. It can often be treated through medical procedures.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abouts
