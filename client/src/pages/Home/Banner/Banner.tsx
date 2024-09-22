import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import imge1 from '..//..//..//assets/images/image1.jpg'
import imge2 from '..//..//..//assets/images/image2.jpg'
import imge3 from '..//..//..//assets/images/image3.jpg'
import imge4 from '..//..//..//assets/images/images4.jpg'

const Banner = () => {
  return (
    <div className='bg-[#ECFEFF]'>
      <>
   <Swiper  spaceBetween={30}
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
<div className='min-h-screen lg:px-0 px-2 lg:flex flex-row-reverse items-center gap-5'>
<div className='lg:w-1/2'>
<img className='w-full h-[300px] lg:h-[550px] object-cover object-center' src={imge1} alt="" />

    </div>
    <div className='lg:w-1/2 leading-normal'> 
<h2 className=' text-3xl lg:text-6xl font-bold '>Easy way to <br /> achieve customer satisfaction</h2>
<p className='mt-9 leading-normal'>
Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit nisi delectus accusantium, dolorum quisquam, officia consequuntur distinctio magnam est nulla ex veritatis eveniet! Magni quidem alias aperiam non vel.
</p>
<button className='btn mt-8 btn-primary text-white'>Book Now</button>
    </div>
    
</div>

</SwiperSlide>

<SwiperSlide>
<div className='min-h-screen lg:px-0 px-2 lg:flex flex-row-reverse items-center gap-5'>
<div className='lg:w-1/2'>
<img className='w-full  lg:h-[550px] object-cover object-center' src={imge2} alt="" />

    </div>
    <div className='lg:w-1/2 leading-normal'> 
<h2 className='text-3xl lg:text-6xl  font-bold '>Easy way to <br /> achieve customer satisfaction</h2>
<p className='mt-9 leading-normal'>
Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit nisi delectus accusantium, dolorum quisquam, officia consequuntur distinctio magnam est nulla ex veritatis eveniet! Magni quidem alias aperiam non vel.
</p>
<button className='btn mt-8  btn-primary text-white'>Book Now</button>
    </div>
  
</div>

</SwiperSlide>

<SwiperSlide>
<div className='min-h-screen lg:px-0 px-2 lg:flex flex-row-reverse items-center gap-5'>
<div className='lg:w-1/2'>
<img className='w-full  lg:h-[550px] object-cover object-center' src={imge3} alt="" />

    </div>
    <div className='lg:w-1/2 leading-normal'> 
<h2 className='text-3xl lg:text-6xl  font-bold  '>Easy way to <br /> achieve customer satisfaction</h2>
<p className='mt-9 leading-normal'>
Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit nisi delectus accusantium, dolorum quisquam, officia consequuntur distinctio magnam est nulla ex veritatis eveniet! Magni quidem alias aperiam non vel.
</p>
<button className='btn mt-8  btn-primary text-white'>Book Now</button>
    </div>
  
</div>

</SwiperSlide>

<SwiperSlide>
<div className='min-h-screen lg:px-0 px-2 lg:flex flex-row-reverse items-center gap-5'>
<div className='lg:w-1/2'>
<img className='w-full  lg:h-[550px] object-cover object-center' src={imge4} alt="" />

    </div>
    <div className='lg:w-1/2 leading-normal'> 
<h2 className='text-3xl lg:text-6xl  font-bold '>Easy way to <br /> achieve customer satisfaction</h2>
<p className='mt-9 leading-normal'>
Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit nisi delectus accusantium, dolorum quisquam, officia consequuntur distinctio magnam est nulla ex veritatis eveniet! Magni quidem alias aperiam non vel.
</p>
<button className='btn mt-8  btn-primary text-white'>Book Now</button>
    </div>
  
</div>

</SwiperSlide>
   </Swiper>
   
   </>

    </div>
  )
}

export default Banner
