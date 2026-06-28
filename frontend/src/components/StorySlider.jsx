import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import animeStories from "../data/animeStories";

import "./StorySlider.css";

function StorySlider({ animeTitle }) {
  const slides =
    animeStories[animeTitle] || [];

  return (
    <div className="story-container">
      <Swiper
        modules={[
          Navigation,
          Pagination,
        ]}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {slides.map(
          (slide, index) => (
            <SwiperSlide
              key={index}
            >
              <div className="story-slide">
                <div className="story-content">
                  <h1>
                    {animeTitle}
                  </h1>

                  <h2>
                    {slide.title}
                  </h2>

                  <p>
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default StorySlider;