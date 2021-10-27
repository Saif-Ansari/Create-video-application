import React from "react";
import PlanCard from "./PlanCard";

const PlanCards = () => {
  return (
    <div className="planCards__wrapper">
      <PlanCard />
      <PlanCard title="pro" price={12} />
      <PlanCard title="Team" price={23} action="Current Plan" isActive={true} />
      <PlanCard title="Agency" price={48} action="Upgrade" />
    </div>
  );
};

export default PlanCards;
