import React from "react";

const VoiceCards = () => {
  return (
    <div className="voiceCardsWrapper">
      {new Array(3).fill(null).map((data) => (
        <div className="voiceCardsWrapper__card"></div>
      ))}
    </div>
  );
};

export default VoiceCards;
