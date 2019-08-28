import React from "react";

const Form = props => (
  <div className="Form">
    <form onSubmit={props.getData}>
      <input type="text" placeholder="City name" name="city" />

      <select name="temperature">
        <option value="C">C</option>
        <option value="F">F</option>
      </select>

      <button>GO!</button>
    </form>
  </div>
);

export default Form;
