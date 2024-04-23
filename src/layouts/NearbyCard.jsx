import React, { useState } from "react";

const NearbyCard = (props) => {
  const { img, title } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="parent"
      style={{
        width: "400px",
        height: "300px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="child"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s, filter 0.5s", 
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            filter: isHovered ? "brightness(0.7)" : "brightness(1)", 
            borderRadius: "10px",

          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            fontFamily: "sans-serif",
            transition: "opacity 0.3s",
            opacity: "1", 
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default NearbyCard;
