import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section className="relative">
      
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="h-[400px] sm:h-[500px]"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/NddHFncZ/Banner1.jpg')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="px-4 text-center text-white">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Help Us Bring Warmth to Those in Need
                </h2>
                <p className="mt-4 text-lg">
                  Many families face the harsh cold without proper clothing or shelter. Join us in making a difference.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co/hHyfrmr/Banner2.jpg')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="px-4 text-center text-white">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Join Our Winter Relief Campaigns
                </h2>
                <p className="mt-4 text-lg">
                  Every act of kindness brings us closer to ensuring a warm and safe winter for everyone.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co/c1s50yS/Banner3.jpg')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="px-4 text-center text-white">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Support Local Community Initiatives
                </h2>
                <p className="mt-4 text-lg">
                  Together, we can provide essential resources to families and individuals in your community.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
