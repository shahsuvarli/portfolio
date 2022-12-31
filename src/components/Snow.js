import React from "react";
// import SnowBall from "./SnowBall";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Snow() {
  const balls = new Array(100).fill(1);

  return (
    <div className="snow-container">
      {balls.map((ball, index) => (
        <AcUnitIcon
          className="ball-container"
          key={index}
          style={{
            width: Math.random() * 30,
            animation: `snowing 10s ease-in-out ${
              Math.random(0, 1) * 10
            }s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default Snow;
