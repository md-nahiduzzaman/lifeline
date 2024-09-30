
import "../../App.css";
import logo from '../../assets/images/signlogo (1).jpg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from "react-router-dom";
import { FaClinicMedical } from "react-icons/fa";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bg from '../../assets/images/new2.avif'
import bg1 from '../../assets/images/new.avif'
import bg2 from '../../assets/images/bg3.webp'
const Login = () => {
  const { signIn, user } = useContext(AuthContext)
  console.log(signIn)
  console.log(user)
  const handleLogin = (e: any) => {
    e.preventDefault()

    const Email = e.target.email.value;
    const pass = e.target.pass.value
    signIn(Email, pass)
      .then((res: any) => {
        console.log(res)
        console.log('yes')
      })
      .catch((error: any) => {
        console.log(error)
      })

  }
  const bannerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const bannerStyle2 = {
  backgroundImage: `url(${bg1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const bannerStyle3 = {
  backgroundImage: `url(${bg2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
  return (
    <div className="my-10 w-[96%] mx-auto">
      <div className="flex justify-between my-8">
        <img src={logo} className="w-[60px] h-[60px]" alt="" />
        <button className="text-xl font-medium text-white bg-black
          px-3 rounded-3xl h-[45px]">Get Intouch</button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center p-2 shadow-2xl rounded-xl">
        <div className="md:w-[700px] w-[360px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  max-w-screen-xl mx-auto">

            <SwiperSlide>
              <div className="h-[390px] md:h-[470px] rounded-md flex justify-center items-center"
              style={bannerStyle}>
                <div className="p-2 rounded-lg bg-[#fff] opacity-40"> 
                   <h1 className="text-3xl font-medium text-center">Welcome Back, Healthcare Hero!</h1>
                   <p className="font-medium text-center">Log in to access your patient records, manage appointments, and collaborate <br /> with your team for better patient care.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[390px] md:h-[470px] rounded-md flex justify-center items-center" style={bannerStyle2}>
                <div>
                     <h1 className="text-3xl font-medium text-center">Sign In to Hospital Portal</h1>
                     <p className="font-medium text-center">
                     Enter your credentials to access hospital resources, update patient <br /> information, and oversee departmental activities.
                     </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[390px] md:h-[470px] rounded-md flex justify-center items-center" style={bannerStyle3}>
                <div>
                     <h1 className="text-3xl font-medium text-center">Log In to Your Medical Dashboard</h1>
                     <p className="font-medium text-center">Access the centralized dashboard to monitor patient statuses, schedule procedures,
                       <br /> and ensure smooth hospital operations.</p>
                </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[360px] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">

            <div><FaClinicMedical className="block mx-auto text-4xl text-[#06B6D4]"></FaClinicMedical></div>

            <p className="mt-1 text-center text-2xl  text-black font-medium dark:text-gray-400 ">Login or create account</p>

            <form onSubmit={handleLogin}>
              <div className="w-full mt-4">
                <input name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
              </div>

              <div className="w-full mt-4">
                <input name="pass" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
              </div>

              <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#06B6D4] rounded-lg hover:bg-[#06d4c3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <Link className="font-medium text-black" to={'/signup'}>Don't have an account?</Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;





