import images1 from'..//..//..//assets/images/testi2 (1).jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testmonial = () => {
  return (
    <div className='max-w-screen-xl p-2 flex-row-reverse lg:flex gap-6 mx-auto my-[120px]'>
         
     <div className='lg:w-1/2'>
        <img className='h-full' src={images1} alt="" />
     </div>
     <>
          <div className='lg:w-1/2 '>
<div>
    <h2 className='font-bold text-xl text-[#06B6D4] lg:mt-0 mt-4'>OUR TESTIMONIALS</h2>
    <p className=' text-4xl lg:text-6xl font-bold mt-3'>Our Happy Patients</p>
    <p className='my-4'>Professional without enterprisee-commerce. Uniquely happy clinets innovative technologies via team member. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente nisi velit molestias dolor  </p>
</div>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-8"
      >
        <SwiperSlide>
            <div className='p-6 lg:p-12 rounded-lg shadow-md bg-[#ECFEFF]'>
            <div className='flex items-center gap-2'>
                <div className=''>
                <div className="avatar m-2">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
                </div>
                <div>
<p className='text-xl font-bold'>Doctor Nahiduzzaman</p>
<p className='uppercase mt-3'>Satisfi Edclient</p>
                </div>
          
            </div>
<p className='mt-6'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sapiente ipsa praesentium vel rem! Sunt sapiente inventore vitae ab reiciendis impedit illo minus dolor hic autem. Pariatur natus est nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod? Eveniet nulla quis commodi officia, obcaecati, esse qui corrupti provident possimus incidunt repellat cum eaque corporis perferendis quod deleniti eius?
</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='p-6 lg:p-12 rounded-lg shadow-md bg-[#ECFEFF]'>
            <div className='flex items-center gap-2'>
                <div className=''>
                <div className="avatar m-2">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
                </div>
                <div>
<p className='text-xl font-bold'>Doctor Nahiduzzaman</p>
<p className='uppercase mt-3'>Satisfi Edclient</p>
                </div>
          
            </div>
<p className='mt-6'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sapiente ipsa praesentium vel rem! Sunt sapiente inventore vitae ab reiciendis impedit illo minus dolor hic autem. Pariatur natus est nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod? Eveniet nulla quis commodi officia, obcaecati, esse qui corrupti provident possimus incidunt repellat cum eaque corporis perferendis quod deleniti eius?
</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='p-6 lg:p-12 rounded-lg shadow-md bg-[#ECFEFF]'>
            <div className='flex items-center gap-2'>
                <div className=''>
                <div className="avatar m-2">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
                </div>
                <div>
<p className='text-xl font-bold'>Doctor Nahiduzzaman</p>
<p className='uppercase mt-3'>Satisfi Edclient</p>
                </div>
          
            </div>
<p className='mt-6'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sapiente ipsa praesentium vel rem! Sunt sapiente inventore vitae ab reiciendis impedit illo minus dolor hic autem. Pariatur natus est nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod? Eveniet nulla quis commodi officia, obcaecati, esse qui corrupti provident possimus incidunt repellat cum eaque corporis perferendis quod deleniti eius?
</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='p-6 lg:p-12 rounded-lg shadow-md bg-[#ECFEFF]'>
            <div className='flex items-center gap-2'>
                <div className=''>
                <div className="avatar m-2">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
                </div>
                <div>
<p className='text-xl font-bold'>Doctor Nahiduzzaman</p>
<p className='uppercase mt-3'>Satisfi Edclient</p>
                </div>
          
            </div>
<p className='mt-6'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sapiente ipsa praesentium vel rem! Sunt sapiente inventore vitae ab reiciendis impedit illo minus dolor hic autem. Pariatur natus est nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod? Eveniet nulla quis commodi officia, obcaecati, esse qui corrupti provident possimus incidunt repellat cum eaque corporis perferendis quod deleniti eius?
</p>
            </div>
            </SwiperSlide>
        
      </Swiper>
          </div>
     
    </>
    </div>
  )
}

export default Testmonial
