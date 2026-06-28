import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import "./TrendingCarousel.css";

function TrendingCarousel({ anime }) {
  return (
    <div className="trending">
      <h2> Trending Anime</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay:2500,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0:{
            slidesPerView:1,
          },
          600:{
            slidesPerView:2,
          },
          900:{
            slidesPerView:3,
          },
          1200:{
            slidesPerView:4,
          },
        }}
      >
        {anime.map((item)=>(
          <SwiperSlide key={item._id}>

            <div className="trend-card">

              <img
                src={item.poster}
                alt={item.title}
              />

              <h3>{item.title}</h3>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default TrendingCarousel;