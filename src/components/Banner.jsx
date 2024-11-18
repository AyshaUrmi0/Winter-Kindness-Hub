import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/autoplay'; // Import autoplay styles (Optional)

const Banner = () => {
  return (
    <section className="relative">
      {/* Swiper Container for the Banner */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,  // Delay in milliseconds between slides
          disableOnInteraction: false,  // Continue autoplay even when user interacts
        }}
        effect="fade"
        className="h-[400px] sm:h-[500px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/GVn6LXz/Banner1.jpg')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold">Help Us Bring Warmth to Those in Need</h2>
                <p className="mt-4 text-lg">
                  Your contribution can make a huge difference in the lives of those facing winter hardships.
                </p>
                <button className="mt-6 btn btn-primary">Donate Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/hHyfrmr/Banner2.jpg')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold">Join Our Winter Campaigns</h2>
                <p className="mt-4 text-lg">
                  Together, we can make this winter warmer for everyone in need.
                </p>
                <button className="mt-6 btn btn-primary">Get Involved</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/c1s50yS/Banner3.jpg')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold">Support Local Community Initiatives</h2>
                <p className="mt-4 text-lg">
                  Your donation helps us fund programs that directly impact those in need in your community.
                </p>
                <button className="mt-6 btn btn-primary">Support Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
