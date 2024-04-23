import React, { useState } from "react";

const ParentComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        backgroundColor: isHovered ? "#e0e0e0" : "#f0f0f0",
        padding: "20px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>Parent Component</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "#fff",
          transition: "background-color 0.3s",
        }}
      >
        <h3>Child Component</h3>
        <p>This is the child component</p>
      </div>
    </div>
  );
};

export default ParentComponent;
