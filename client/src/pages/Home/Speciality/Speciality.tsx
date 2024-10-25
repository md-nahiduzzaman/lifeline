
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
const Speciality = () => {
      const axiosCommon=useAxiosCommon()
      const {data}=useQuery({
            queryKey:['doctor-all'],
            queryFn:async()=>{
              const {data}=await axiosCommon.get('/doctors-all')    
              return data
            }
      })
  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
    <div className='lg:w-2/3 mx-auto text-center mb-10'>
        <h2 className='text-xl font-bold mb-3 text-[#23085A]'>All Speciality Doctors</h2>
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
     {
      data?.map((doctors:any)=> <SwiperSlide key={doctors._id}>
      <div className='rounded-lg bg-base-200 p-6 shadow-md'>
      <img className='image h-[350px] w-full object-cover object-center' src={doctors?.image_url} alt="" />
      <h2 className='font-bold mt-2 capitalize'>{doctors?.name}</h2>
      <p className='capitalize'>{doctors?.department}</p>
      </div>
            </SwiperSlide>)
     }
    </Swiper>
    </div>
    
  </>
  )
}

export default Speciality
