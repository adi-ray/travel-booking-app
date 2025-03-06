import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import hotelImg from "../assets/images/hotel.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServicesData = [
  {
    imgUrl: hotelImg,
    title: "Best Hotel Deals",
    desc: "Find and book the best hotels at unbeatable prices. From budget stays to luxury resorts, we provide accommodations that suit every traveler's needs.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Travel with experienced guides who offer deep cultural insights, local expertise, and engaging storytelling to make your journey more enriching and memorable.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Plan your perfect trip with our customizable itineraries, choosing destinations, activities, accommodations, and transport tailored to your preferences.",
  },
];
const ServiceList = () => {
  return (
    <>
      {ServicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
