import React from "react";
import ImageCard from "./ImageCard";
const ImageCards = ({ data }) => {
  return (
    <div className="ImageCardsWrapper">
      {data.map((userData) => (
        <ImageCard {...userData} />
      ))}
    </div>
  );
};

export default ImageCards;
