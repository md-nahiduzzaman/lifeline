import { FaEnvelope, FaImage, FaKey, FaUser, FaUserClock } from 'react-icons/fa6';
import bg from '../../assets/images/bg.avif'
import logo from '../../assets/images/signlogo (1).jpg'

import { useContext, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const SignUp = () => {
  const auth = getAuth(app)
  const axiosCommon=useAxiosCommon()
  const { createUser, user } = useContext(AuthContext)
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [photo, setPhoto]=useState<any>('')
  console.log(createUser)
  console.log(user)
  const bannerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(191, 219, 254, 0.5), rgba(147, 197, 253, 0.5)), url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(!selectedFile){
      return
    }
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;
    const age=e.target.num.value
    const form: any = new FormData(e.target)
    const image2: any = form.get('image')
    const data: any = new FormData()
    data.append("image", image2)
    
    fetch('https://api.imgbb.com/1/upload?key=58c258f947a2113010411cf51afd6eec', {
      method: 'POST',
      body:data,
  })
  .then((res:any)=>{
     return res.json()
  })
  .then((data:any)=>{
     console.log(data.data.url)
     setPhoto(data.data.url)
  })
   if(photo){
    let image_url=photo;
    createUser(email, password)
    .then((res: any) => {
      console.log(res)
      updateProfile(auth.currentUser as any, {
        displayName: name,
        photoURL:photo,
      })
        .then(() => {
          console.log("Yes");
          let role='user'
          axiosCommon.post('/user_post',{name,email,password,age,image_url,role})
        })
        .catch((error: any) => {
          console.log("No", error);
        });
    })
    .catch((error: any) => {
      console.error(error)
    })
   }
  }

  return (
    <div className="my-8 rounded-xl w-[98%] mx-auto 
    min-h-[75vh] flex justify-center items-center">
      <div className="w-[94%] flex flex-wrap gap-2 justify-center shadow-lg py-4 rounded-xl mx-auto min-h-[62vh]">
        <div 
          className='bg-white rounded-lg p-2 w-[350x] md:w-[48%] lg:w-[31%]'>

          <img src={logo} className='w-[40px] h-[40px] block mx-auto mb-2' alt="" />

          <h1 className='text-3xl text-center font-medium'><span className='text-blue-300'>Heath </span>
            <span className='text-blue-400'>Mas<span className='text-blue-500'>termind</span></span></h1>
          <span className='text-3xl font-medium text-blue-300 block mx-[40%]'>Register</span>
          <form onSubmit={handleSubmit} action="" className='p-1 mt-3'>
            <div className='flex items-center my-3 space-x-2'>
              <FaUser className='text-blue-400 text-[23px]'></FaUser>
              <input type="text" name='name' placeholder='Your Name' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
            </div>
            <div className='flex items-center my-6 space-x-2'>
              <FaEnvelope className='text-blue-400 text-[23px]'></FaEnvelope>
              <input type="text" name='email' placeholder='Your Email' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
            </div>
            <div className='flex items-center my-6 space-x-2'>
              <FaUserClock className='text-blue-400 text-[23px]'></FaUserClock>
              <input type="number" name='num' placeholder='Your Age' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
            </div>
            <div className='flex items-center my-6 space-x-2'>
              <FaImage className='text-blue-400 text-[23px]'></FaImage>
              <input onChange={(e: any) => {
                setSelectedFile(e.target.files[0])
              }} type="file" name='image' placeholder='Your Photo Url' className='w-full file:h-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
            </div>
            <div className='flex items-center my-6 space-x-2'>
              <FaKey className='text-blue-400 text-[23px]'></FaKey>
              <input type="text" name='pass' placeholder='Your Password' className='w-full border-[2px] h-[40px] focus:outline-none focus:border-gray-300 border-gray-300' />
            </div>

            <button type='submit' className='text-xl rounded-md block mx-auto font-medium text-black w-[300px] my-3 bg-blue-400 h-[40px]'>
              Submit
            </button>

          </form>
          <Link to={'/login'}><a className='font-medium mb-1 text-center block mx-auto' href="">Already have an acount?</a></Link>
        </div>
        <div style={bannerStyle} className='p-2 min-h-[60vh] flex items-center rounded-xl w-[350px] md:w-[430px] opacity-80 bg-white'>
          <div><h1 className='text-3xl font-medium'>Mastermind For Better <br />Health Together</h1>
            <p className='font-medium mt-4 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Provident consequuntur soluta amet quaerat?
              Lorem ipsum dolor sit.</p></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
