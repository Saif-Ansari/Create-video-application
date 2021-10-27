import React from "react";
import { Button } from "antd";
const CurrentActor = () => {
  return (
    <div className="currentActorWrap">
      <div className="currentActorWrap__userAvatar">
        <img
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          }
          alt=""
        />
      </div>
      <div className="currentActorWrap__instructions">
        <div>
          <p>
            Type or paste your videoscript here. You can also request a
            translation of
          </p>
          <p>an English script to any of 27 other languages</p>
        </div>
        <Button
          style={{
            backgroundColor: "#f1f1f1",
            color: "#999999",
            marginTop: "1rem",
            width: "120px",
          }}
        >
          Listen
        </Button>
      </div>
    </div>
  );
};

export default CurrentActor;
