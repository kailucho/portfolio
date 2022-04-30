import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina snow",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,temporibus qui. Officia, aliquid? Voluptatibus aperiam veritatis a quisquam, earum inventore sed atque beatae sunt neque corrupti incidunt, alias qui et.",
  },
  {
    avatar: AVTR1,
    name: "Tina snow",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,temporibus qui. Officia, aliquid? Voluptatibus aperiam veritatis a quisquam, earum inventore sed atque beatae sunt neque corrupti incidunt, alias qui et.",
  },
  {
    avatar: AVTR1,
    name: "Tina snow",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,temporibus qui. Officia, aliquid? Voluptatibus aperiam veritatis a quisquam, earum inventore sed atque beatae sunt neque corrupti incidunt, alias qui et.",
  },
  {
    avatar: AVTR1,
    name: "Tina snow",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,temporibus qui. Officia, aliquid? Voluptatibus aperiam veritatis a quisquam, earum inventore sed atque beatae sunt neque corrupti incidunt, alias qui et.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="AVTR1" />
            </div>

            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
