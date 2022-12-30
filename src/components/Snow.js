import React from "react";
import SnowBall from "./SnowBall";

function Snow() {
  const balls = new Array(10).fill(1);

  return (
    <div className="snow-container">
      {balls.map((ball, index) => (
        <SnowBall key={index} />
      ))}
    </div>
  );
}

export default Snow;
