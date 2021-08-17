import React from "react";

const Skill = (props) => {
  const { name, icon } = props;
  return (
    <div className="skill-icon-container">
      <img className="skill-icon" src={icon} />
      <div className="skill-title">{name}</div>
    </div>
  );
};
export default Skill;
