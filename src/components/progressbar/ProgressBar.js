import React from "react";
import './ProgressBar.css';


function ProgressBar({ data, blue }) {
  
  return (
    <div className="progress-bar">
      <div className={"inner-circle" + (blue ? " blue" : "")}> </div>
      <div className="outer-circle"> </div>
      {data>=0 ? <div class="data">+{data}%</div> : <div class="data">{data}</div>}
      <div className="circle">
        <div className="bar left">
          <div className={"progress" + ((data<0 ? " red" : "") + (blue ? " white" : ""))}> </div>
        </div>
        <div className="bar right">
          <div className={"progress" + ((data<0 ? " red" : "") + (blue ? " white" : ""))}> </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
