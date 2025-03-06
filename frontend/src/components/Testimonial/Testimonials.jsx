import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    resposive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Good trip to Ooty. Everything was taken care of. Beautiful hill
          station and fun activities. Friendly staff. I will suggest to always
          plan your trips with them.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          I would highly recommend to anyone who wants to explore India.The only
          suggestion I have is to include more vegetarian options in the meals.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Lia Franklin</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          The only issue I faced was quality of food in a hotel in Mumbai, but
          Travel World helped me to arrange food from different restaurant
          outside the hotel.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Great job, I will definitely be ordering again ! After using booking
          tour my business skyrocketed! Man, this thing is getting better and
          better as I learn more about it.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Lia Franklin</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Needless to say we are extremely satisfied with the results. Travel
          World was the best investment I ever made. Nice work on your booking
          tours. Impressed!!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
