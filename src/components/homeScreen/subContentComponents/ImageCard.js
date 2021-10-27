import React from "react";
import userImg from "../../../assets/images/userIcon.png";
const ImageCard = ({ url, title }) => {
  return (
    <div className="imageCradWrap">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
};

export default ImageCard;
