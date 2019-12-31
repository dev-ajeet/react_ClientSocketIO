import React from "react";
import drawCircle from "../util/canvasLoadAnimation";

// these are rendering function, so there is no need to declear them as classes

function Cpu(props) {
  // I have used props.cpuData.osType for the class of canvas as otherwise it was selecting
  // only one first element
  const canvas = document.querySelector(`.${props.cpuData.cpuWidgetId}`);

  drawCircle(canvas, props.cpuData.cpuLoad);
  //   console.log(props.cpuData.cpuLoad);
  return (
    <div className="col-sm-3 cpu">
      <h3>CPU Load</h3>
      <p>{props.cpuData.cpuModel}</p>
      <div className="canvas-wrapper">
        <canvas
          className={props.cpuData.cpuWidgetId}
          width="200"
          height="200"
        ></canvas>
        <div className="cpu-text">{props.cpuData.cpuLoad}%</div>
      </div>
    </div>
  );
}

export default Cpu;
