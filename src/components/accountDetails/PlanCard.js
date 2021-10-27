import React from "react";
import { CheckOutlined } from "@ant-design/icons";
<CheckOutlined />;
const PlanCard = ({
  title = "Free",
  price = 0,
  action = "Downgrade",
  isActive = false,
}) => {
  return (
    <div className={`planCard ${isActive ? "activeCard" : ""}`}>
      <h2>{title}</h2>
      <div className="planCard__details">
        {new Array(5).fill(null).map(() => (
          <div>
            <CheckOutlined />
            <p>Cras sed felis eget lorem ipsum</p>
          </div>
        ))}
      </div>
      <div className="planCard__price">
        <span>$</span>
        <span>{price}</span>
      </div>
      <button>{action}</button>
    </div>
  );
};

export default PlanCard;
