
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '..//..//..//assets/images/doctor1.png'
const Speciality = () => {
  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
    <div className='lg:w-2/3 mx-auto text-center mb-10'>
        <h2 className='text-xl font-bold mb-3'>Best Consulting Speciality</h2>
        <p>Follow this steps below to start use of Projećt Software. For personal guide
        you can insert your mail here.</p>
    </div>
    <Swiper
      slidesPerView={1}
      breakpoints={
            {
                  640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3, 
                        spaceBetween: 30,
                      },
            }
      }
      spaceBetween={30}
      freeMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
  
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
<div className='rounded-lg bg-base-200 p-6 shadow-md'>
<img className='image' src={image1} alt="" />
<h2 className='font-bold mt-2'>Dr. Jhonny Wilson</h2>
<p>Paradise Medicine</p>
</div>
      </SwiperSlide>
      <SwiperSlide>
<div className='rounded-lg bg-base-200 p-6 shadow-md'>
<img className='image' src={image1} alt="" />
<h2 className='font-bold mt-2'>Dr. Jhonny Wilson</h2>
<p>Paradise Medicine</p>
</div>
      </SwiperSlide>
      <SwiperSlide>
<div className='rounded-lg bg-base-200 p-6 shadow-md'>
<img className='image' src={image1} alt="" />
<h2 className='font-bold mt-2'>Dr. Jhonny Wilson</h2>
<p>Paradise Medicine</p>
</div>
      </SwiperSlide>
      <SwiperSlide>
<div className='rounded-lg bg-base-200 p-6 shadow-md'>
<img className='image' src={image1} alt="" />
<h2 className='font-bold mt-2'>Dr. Jhonny Wilson</h2>
<p>Paradise Medicine</p>
</div>
      </SwiperSlide>
      <SwiperSlide>
<div className='rounded-lg bg-base-200 p-6 shadow-md'>
<img className='image' src={image1} alt="" />
<h2 className='font-bold mt-2'>Dr. Jhonny Wilson</h2>
<p>Paradise Medicine</p>
</div>
      </SwiperSlide>
      <SwiperSlide>
<div className='rounded-lg bg-base-200 p-6 shadow-md'>
<img className='image' src={image1} alt="" />
<h2 className='font-bold mt-2'>Dr. Jhonny Wilson</h2>
<p>Paradise Medicine</p>
</div>
      </SwiperSlide>
     
    </Swiper>
    </div>
    
  </>
  )
}

export default Speciality
