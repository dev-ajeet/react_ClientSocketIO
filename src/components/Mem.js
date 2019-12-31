import React from "react";
import drawCircle from "../util/canvasLoadAnimation";

// these are rendering function, so there is no need to declear them as classes

function Mem(props) {
  const { totalMem, usedMem, memUsage, freeMem, memWidgetId } = {
    ...props.memData
  };

  const canvas = document.querySelector(`.${memWidgetId}`);
  drawCircle(canvas, memUsage * 100);
  const totalMemGB = Math.floor((totalMem / 1073741824) * 100) / 100;
  const freeMemGB = Math.floor((freeMem / 1073741824) * 100) / 100;

  return (
    <div className="col-sm-3 mem">
      <h3>Memory Usage</h3>
      <div className="canvas-wrapper">
        {" "}
        <canvas className={memWidgetId} width="200" height="200"></canvas>
      </div>
      <div className="mem-text">{memUsage * 100}%</div>
      <div>Total Memory: {totalMemGB}GB</div>
      <div>Free Memory: {freeMemGB}GB</div>
    </div>
  );
}

export default Mem;
