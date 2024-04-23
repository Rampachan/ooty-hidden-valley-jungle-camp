import React from "react";
import img from "../assets/img/service.jpg";
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/menu4.JPG";
import img5 from "../assets/img/menu5.JPG";
import img6 from "../assets/img/menu6.JPG";
import MenuCard from "../layouts/ServiceCard";

const Services = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white"style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Our Services
      </h1>

      <div className=" flex flex-wrap pb-4 gap-8 justify-center">
        <MenuCard img={img1} title="Rooms" />
        <MenuCard img={img2} title="Trekking" />
        <MenuCard img={img3} title="Food" />
        <MenuCard img={img4} title="Camp Fire" />
        <MenuCard img={img5} title="Off Roading" />
        <MenuCard img={img6} title="Sight visit" />
      </div>
    </div>
  );
};

export default Services;
