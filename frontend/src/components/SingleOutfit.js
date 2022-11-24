import React from "react";

export default function SingleOutfit(outfit) {
  console.log(outfit);
  return (
    <div className="single-photo-container">
      <img
        className="single-photo"
        alt="outfit_image"
        src={outfit.selectedOutfit}
      ></img>
    </div>
  );
}
