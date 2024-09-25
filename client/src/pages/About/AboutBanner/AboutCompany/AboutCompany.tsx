import { FaArrowTrendUp } from 'react-icons/fa6'
import image1 from '..//..//..//../assets/images/doctorAbout.jpg'
const AboutCompany = () => {
  return (
   <div className='my-[120px] bg-[#ECFEFF] py-12 lg:py-36 px-2'>
     <div className=" lg:flex  gap-7 max-w-screen-xl mx-auto">
      <div className='lg:w-1/2'>
<img className='w-full h-full rounded-lg' src={image1} alt="" />
      </div>
      <div className='lg:w-1/2'>
        <p className='text-xl font-bold text-[#06B6D4] lg:mt-0 mt-4'>ABOUT COMPANY</p>
        <h2 className='text-4xl lg:text-6xl font-bold mt-5 '>
        Best Health Center <br />Since - 20024
        </h2>

<p className='mt-6'>
Continually evolve professional intellectual capital without enterprise users. Seamlessly matrix value added e-commerce. Uniquely e-enable innovative technologies via team Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt sit eius id officia laudantium dignissimos optio non corporis sapiente, ipsum, excepturi eveniet molestiae nostrum eos facilis cupiditate maxime beatae?
</p>

<div className='mt-8 lg:flex md:flex gap-12  font-semibold'>
    <ul className=' list-inside list-disc'>
        <li >Psychodynamic Therapy</li>
        <li className='mt-3' >Couple Problem Therapy</li>
    </ul>
    <ul  className=' list-inside list-disc '>
        <li >Free Consultants</li>
        <li className='mt-3'>Metal Satisfications</li>
    </ul>
</div>

<button className='btn mt-9 bg-[#06B6D4] text-white'>More About <FaArrowTrendUp className='text-2xl' /> </button>
      </div>
    </div>
   </div>
  )
}

export default AboutCompany
