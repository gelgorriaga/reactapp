import React from "react";

const ChartForm = props => (
  <div className="ChartForm">
    <form onChange={props.getChart}>

      <select name="chartType">
        <option value="temperature">Temperature</option>
        <option value="humidity">Humidity</option>
        <option value="pressure">Pressure</option>
      </select>
      {/* <button>GO!</button> */}
    </form>
  </div>
);

export default ChartForm;