import React from "react";
import img from "../assets/img/about.jpg";
import img1 from "../assets/img/hills.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 text-white "style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
 
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-50 lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Our Trip Special?
          </h2>
          <p>
          Ooty, the Queen of Hill stations, welcome you with mesmerizing meadows, soothing environment, cool weather and
           a wide array of sightseeing places to visit and admire. The Ooty Hidden Valley jungle campsite promises a unique and 
           lively experience that will leave you in awe for many days to come.
          The Hidden Valley jungle camp in Ooty has simple military-style tents for those who want a more intimate jungle stay.
          The tents are made of canvas and are waterproof. There is also an open shower at the campsite for the experience of bathing 
          under the sky.

          </p>
          <p>
          The campsite offers delicious food with varieties of local touch-ups, cooked in spring water. Scramble up boulders 
          to reach the Beermukku temple, take the winding road back through woodland and grassland, gearing yourself up for a chance 
          spotting of junglefowl, peacock, hares or gaur.
          The Hidden Valley jungle camp Ooty has put up machans at selected spots for the keen wildlife enthusiast. After a 15km Jeep ride to 
          the village, you will be taken on a trek through the jungle.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
      
    </div>
  );
};

export default About;
