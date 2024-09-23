import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa6';
import bg from '../../assets/images/bg.avif'
import logo from '../../assets/images/signlogo (1).jpg'
import '../../App.css'
const SignUp = () => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(191, 219, 254, 0.5), rgba(147, 197, 253, 0.5)), url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="my-8 rounded-xl w-[98%] mx-auto bg-gradient-to-r from-cyan-100 to-blue-200
    min-h-[75vh] flex justify-center items-center ">
      <div className="w-[94%] flex flex-wrap gap-5 justify-evenly rounded-xl mx-auto min-h-[62vh]">
        <div className='w-[330px] bg-white rounded-lg p-2'>
          
           <img src={logo} className='w-[40px] h-[40px] block mx-auto mb-2' alt="" />
               
              <h1 className='text-3xl font-medium'><span className='text-blue-300'>Heath </span>
              <span className='text-blue-400'>Mas<span className='text-blue-500'>termind</span></span></h1>
              <span className='text-3xl font-medium text-blue-300'>Register</span>
              <form action="" className='p-1 mt-5'>
                    <div className='flex items-center my-6 space-x-2'>
                      <FaUser className='text-blue-400 text-[23px]'></FaUser>
                    <input type="text" placeholder='Your Name' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
                    </div>
                    <div className='flex items-center my-6 space-x-2'>
                      <FaEnvelope className='text-blue-400 text-[23px]'></FaEnvelope>
                    <input type="text" placeholder='Your Email' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
                    </div>
                    <div className='flex items-center my-6 space-x-2'>
                     <FaKey className='text-blue-400 text-[23px]'></FaKey>
                    <input type="text" placeholder='Your Password' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
                    </div>
                    <button className='text-xl font-medium text-black my-5 bg-blue-400 block ml-auto w-[280px] h-[40px]'>
                      Submit
                    </button>
              </form>
              <a className='font-medium' href="">Already have an acount?</a>
        </div>
        <div style={bannerStyle} className='p-2 min-h-[60vh] flex items-center rounded-xl w-[350px] md:w-[480px] opacity-80 bg-white'>
          <div><h1 className='text-3xl font-medium'>Mastermind For Better <br />Health Together</h1>
          <p className='font-medium mt-4 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Provident consequuntur soluta amet quaerat?
          Lorem ipsum dolor sit.</p></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
