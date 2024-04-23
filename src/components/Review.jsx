import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.jpg";
import img2 from "../assets/img/pic2.jpg";
import img3 from "../assets/img/pic3.jpg";

const Review = () => {
  return (
    <div className="  flex flex-col justify-center lg:px-15 px-5 py-7 bg-[#60a05b] ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Customer's Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img={img1} title="Customer 1" />
        <ReviewCard img={img2} title="Customer 2" />
        <ReviewCard img={img3} title="Customer 3" />
      </div>
    </div>
  );
};

export default Review;
