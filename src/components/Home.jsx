import React from "react";
import Button from "../layouts/Button";
import videoSrc from "../assets/videos/ooty_shot.mp4"; 

const Home = () => {
  const redirectToStayBooking = () => {
    console.log("Redirecting to Agoda...");
    window.location.href = 'https://www.agoda.com/';
  };

  return (
    <div className="min-h-screen relative">
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 object-cover w-full h-full"
        style={{
          zIndex: "-1", 
          position: "fixed",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 z-10 text-white">
        <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0 text-center">
          <h1 className="font-semibold text-5xl leading-tight">
            Welcome to Ooty Hidden Valley Jungle Camp.
          </h1>
          <p className="text-lg">
            Boost your productivity and build your mood in Ooty Hidden Valley Jungle Camp.
          </p>
          <div className="flex justify-center">
            <Button title="BOOK STAY" onClick={redirectToStayBooking} />
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        style={{ zIndex: "-1" }}
      ></div>
    </div>
  );
};

export default Home;
