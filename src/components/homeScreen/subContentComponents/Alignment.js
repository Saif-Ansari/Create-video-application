import React from "react";
import { Button } from "antd";
const Alignment = () => {
  return (
    <div className="alignBtnWrapper">
      {["Left", "Center", "Right"].map((data) => (
        <Button
          style={
            data === "Center"
              ? {
                  backgroundColor: "#EBF2FF",
                  color: "#3860AD",
                  marginTop: "1rem",
                  width: "100px",
                }
              : {
                  backgroundColor: "#f1f1f1",
                  color: "#999999",
                  marginTop: "1rem",
                  width: "100px",
                }
          }
        >
          {data}
        </Button>
      ))}
    </div>
  );
};

export default Alignment;
