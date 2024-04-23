import React from "react";
import NearbyCard from "../layouts/NearbyCard";
import img from "../assets/img/nearby.jpg";
import img1 from "../assets/img/Doddabeta peak.jpg";
import img2 from "../assets/img/murugan temple.jpg";
import img3 from "../assets/img/pykara lake.jpg";
import img4 from "../assets/img/Rose garden.jpg";

const Nearby = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white"style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Nearby Places
      </h1>

      <div className="flex flex-wrap pb-4 gap-8 justify-center">
        <NearbyCard img={img1} title="Doddabeta Peak" />
        <NearbyCard img={img2} title="Murugan Temple" />
        <NearbyCard img={img3} title="Pykara Lake" />
        <NearbyCard img={img4} title="Rose Garden" />
      </div>
    </div>
  );
};

export default Nearby;
