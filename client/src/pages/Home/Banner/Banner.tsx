import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="bg-[#ECFEFF]">
      <>
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
          className="mySwiper  max-w-screen-xl mx-auto"
        >
          <SwiperSlide>
            <div className="min-h-screen lg:flex flex-row-reverse items-center gap-5">
              <div className="lg:w-1/2">
                <img
                  className="w-full h-[300px] lg:h-[550px] object-cover object-center"
                  src="https://images.unsplash.com/photo-1514416432279-50fac261c7dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="lg:w-1/2 leading-normal">
                <h2 className=" text-3xl lg:text-6xl font-bold ">
                  Easy way to <br /> achieve customer satisfaction
                </h2>
                <p className="mt-9 leading-normal">
                  Providing all customer service within one software. Our
                  landing page template works on all devices and we have
                  completely redesigned the project management experience.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas sit nisi delectus accusantium, dolorum quisquam,
                  officia consequuntur distinctio magnam est nulla ex veritatis
                  eveniet! Magni quidem alias aperiam non vel.
                </p>
                <button className="btn mt-8 btn-primary text-white">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-h-screen lg:flex flex-row-reverse items-center gap-5">
              <div className="lg:w-1/2">
                <img
                  className="w-full  lg:h-[550px] object-cover object-center"
                  src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="lg:w-1/2 leading-normal">
                <h2 className="text-3xl lg:text-6xl  font-bold ">
                  Easy way to <br /> achieve customer satisfaction
                </h2>
                <p className="mt-9 leading-normal">
                  Providing all customer service within one software. Our
                  landing page template works on all devices and we have
                  completely redesigned the project management experience.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas sit nisi delectus accusantium, dolorum quisquam,
                  officia consequuntur distinctio magnam est nulla ex veritatis
                  eveniet! Magni quidem alias aperiam non vel.
                </p>
                <button className="btn mt-8  btn-primary text-white">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-h-screen lg:flex flex-row-reverse items-center gap-5">
              <div className="lg:w-1/2">
                <img
                  className="w-full  lg:h-[550px] object-cover object-center"
                  src="https://images.unsplash.com/photo-1551601651-bc60f254d532?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="lg:w-1/2 leading-normal">
                <h2 className="text-3xl lg:text-6xl  font-bold  ">
                  Easy way to <br /> achieve customer satisfaction
                </h2>
                <p className="mt-9 leading-normal">
                  Providing all customer service within one software. Our
                  landing page template works on all devices and we have
                  completely redesigned the project management experience.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas sit nisi delectus accusantium, dolorum quisquam,
                  officia consequuntur distinctio magnam est nulla ex veritatis
                  eveniet! Magni quidem alias aperiam non vel.
                </p>
                <button className="btn mt-8  btn-primary text-white">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-h-screen lg:flex flex-row-reverse items-center gap-5">
              <div className="lg:w-1/2">
                <img
                  className="w-full  lg:h-[550px] object-cover object-center"
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="lg:w-1/2 leading-normal">
                <h2 className="text-3xl lg:text-6xl  font-bold ">
                  Easy way to <br /> achieve customer satisfaction
                </h2>
                <p className="mt-9 leading-normal">
                  Providing all customer service within one software. Our
                  landing page template works on all devices and we have
                  completely redesigned the project management experience.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas sit nisi delectus accusantium, dolorum quisquam,
                  officia consequuntur distinctio magnam est nulla ex veritatis
                  eveniet! Magni quidem alias aperiam non vel.
                </p>
                <button className="btn mt-8  btn-primary text-white">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
