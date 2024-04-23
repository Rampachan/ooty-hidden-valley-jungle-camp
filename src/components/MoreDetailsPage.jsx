// MoreDetailsPage.jsx
import React from "react";
import img from "../assets/img/detailImage.jpg";

const MoreDetailsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 text-white">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">More Details</h1>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-2/4 p-4 space-y-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed justo ut nisi cursus interdum eu ac
            mi. Phasellus ac justo et lorem finibus malesuada.
          </p>
          <p>
            Phasellus luctus, libero vitae tincidunt rhoncus, orci ipsum placerat arcu, at maximus est leo ac sapien.
            Mauris sit amet condimentum nunc.
          </p>
        </div>
        <div className="w-2/4">
          <img className="rounded-lg" src={img} alt="Detail Image" />
        </div>
      </div>
    </div>
  );
};

export default MoreDetailsPage;
