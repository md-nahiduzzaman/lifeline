import logo from '../../assets/images/logo2.jpg';
import google from '../../assets/images/google.png';
import facebook from '../../assets/images/facebook.png';

import "../../App.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';



const Login = () => {
  const {signIn,user}=useContext(AuthContext)
  console.log(signIn)
  console.log(user)
  const handleLogin=(e:any)=>{
    e.preventDefault()

    const Email=e.target.email.value;
    const pass=e.target.pass.value
    signIn(Email,pass)
    .then((res:any)=>{
      console.log(res)
      console.log('yes')
    })
    .catch((error:any)=>{
      console.log(error)
    })

  }
  return (
    <div className="p-2 mt-8">
      <div className='flex w-[97%] mx-auto justify-between items-center'>
        <div className='flex items-center space-x-1 '>
          <img src={logo} alt="" className='w-[70px] h-[70px]' />
          <span className='text-[18px] font-medium text-black'>Lifeline</span>
        </div>
        <div className='px-5 p-1 rounded-3xl bg-black h-[45px] flex items-center'>
          <span className='text-white text-[18px] font-medium'>Get Intouch</span>
        </div>
      </div>
      <div className="w-[99%] md:w-[97%] rounded-2xl mt-3 flex justify-center items-center
     mx-auto bg-gradient-to-r from-[#ffffe4] to-[#ccff99dc] min-h-[75vh]">
        <div className='w-[95%] flex p-3 flex-col lg:flex-row justify-between items-center rounded-3xl min-h-[64vh] bg-[#333333ee]'>
          <div className='w-full md:w-[52%] flex items-center justify-center'>
            <div>
              <h1 className='text-3xl text-white font-medium
                          text-center'>Manage Your Health <br /> Here</h1>
           
              <div className='p-2 w-[350px] mx-auto md:p-5 rounded-2xl mt-3 bg-[#666666]'>

                <p className='text-white'>This health Platform is a game cahnger!it is
                  <br /> easy to use Lorem, ipsum dol for easy set <br />
                  Lorem ipsum dol amet consectetur adipisicing.

                </p>
                {/* <p className='text-white mt-3 space-x-2 flex items-center justify-center'>
                  <img src={leader} className='w-[55px] h-[55px]
                              rounded-[50%]' alt="" />
                  <h1>Naduzzaman <br /> Team Leader</h1>
                </p> */}
              </div>
            </div>
          </div>
          <div className='hov mt-5 p-2 lg:mt-[1px] w-full flex justify-center items-center lg:w-[44%] rounded-3xl'>
                      <div className=''>
                          <h1 className='text-3xl text-center font-medium mt-5 md:mt-[1px] mb-5'>Login</h1>
                          <form onSubmit={handleLogin} action="" className=''>
                             <input type="email" placeholder='Your Email' className='block p-1 mb-3 w-[330px] h-[45px] bg-gray-300
                             rounded-xl' name="email" id="" />
                             
                             
                                 <input type="password" placeholder='Password' className='block p-1 mb-3 w-[330px] h-[45px] bg-gray-300
                             rounded-xl' name="pass" id="" />

                             <button type='submit' className='text-black mb-2 font-medium btn w-[330px] h-[45px]
                             text-xl'>Login</button>
                          </form>
                          <Link to={''} className='mt-3 text-center
                          text-[17px] font-medium'>Already have an account?</Link>

                          <div className='mt-4'>
                              <button className='bg-black flex items-center justify-center w-[330px] rounded-xl h-[45px]'>
                                 <img src={google} className='w-[35px] h-[35px]' alt="" />
                              </button>
                              <button className='bg-black mt-3 flex items-center justify-center w-[330px] rounded-xl h-[45px]'>
                                <img src={facebook} className='w-[35px] h-[35px]' alt="" />
                              </button>
                          </div>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;





