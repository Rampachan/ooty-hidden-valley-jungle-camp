import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Review from "./components/Review";
import Footer from "./components/Footer";
import VideoPlayer from "./components/videoplayer";
import Nearby from "./components/nearby";
import MoreDetailsPage from "./components/MoreDetailsPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="Services">
          <Services />
        </div>

        <div id="nearby">
          <Nearby/>
          </div>

        <div id="about">
          <About />
        </div>

        

        <div id="VideoPlayer">
          <VideoPlayer />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
