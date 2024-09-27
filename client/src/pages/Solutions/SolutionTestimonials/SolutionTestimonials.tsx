import { FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import image1 from '..//..//..//assets/images/doctor2.png'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
const SolutionTestimonials = () => {
  return (
    <div className="my-[120px]">
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
  )
}

export default SolutionTestimonials
