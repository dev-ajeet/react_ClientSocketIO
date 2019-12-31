import React, { Component } from "react";
import Cpu from "./Cpu";
import Mem from "./Mem";
import Info from "./Info";
import "./widget.css";

class Widget extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      freeMem,
      totalMem,
      usedMem,
      memUsage,
      osType,
      upTime,
      cpuModel,
      numCores,
      cpuSpeed,
      cpuLoad,
      macA,
      address,
      isActive
    } = { ...this.props.data };

    const cpuWidgetId = `cpu-widge-${macA}`;
    const memWidgetId = `mem-widge-${macA}`;

    const cpu = { cpuLoad, cpuModel, cpuWidgetId };
    const mem = { totalMem, usedMem, memUsage, freeMem, memWidgetId };
    const info = {
      macA,
      address,
      osType,
      upTime,
      numCores,
      cpuSpeed,
      cpuModel
    };
    let notActiveDiv = "";
    if (!isActive) {
      notActiveDiv = <div className="not-active">Offline</div>;
    }
    // console.log(this.props);

    return (
      <div className="widget col-sm-12">
        {notActiveDiv}
        <Cpu cpuData={cpu} />
        <Mem memData={mem} />
        <Info infoData={info} />
      </div>
    );
  }
}

export default Widget;
