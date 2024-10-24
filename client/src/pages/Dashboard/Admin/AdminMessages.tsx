import { FaWhatsapp } from 'react-icons/fa6';
import bg from '../../../assets/images/bg-chat.jpeg'
const AdminMessages = () => {

  const bgStyle = {
    backgroundImage: `url(${bg})`, // Replace with your image URL
    backgroundSize: "cover", // Ensures the image covers the entire element
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
  };
  return (
    <div style={bgStyle} className='w-full flex justify-center items-center h-[100vh]'>
          <div className='w-[380px] bg-white p-2 rounded-md'>
          <FaWhatsapp className='text-[150px] block mx-auto'></FaWhatsapp>
          <h1 className='text-center font-medium mt-2 text-xl'>WhatsApp For Window</h1>
          <h1 className='text-center text-gray-700 mt-2'>Use WhatsApp Messenger to stay in touch with friends and family. WhatsApp is free and offers simple, secure.</h1>
          </div>
    </div>
  );
};

export default AdminMessages;
