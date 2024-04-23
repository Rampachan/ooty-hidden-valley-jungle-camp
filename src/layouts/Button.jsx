import React from "react";

const Button = (props) => {
  return (
    <div>
      <button 
        className="px-6 py-1 border-1 border-white bg-[#025239] text-white transition-all rounded-full"
        onClick={props.onClick} // Pass the onClick function from the parent component
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
