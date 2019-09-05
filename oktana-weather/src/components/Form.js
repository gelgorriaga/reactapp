import React from "react";

const Form = props => (
  <div className="Form">
    <form onSubmit={props.getData}>
      <input type="text" placeholder="City name" name="city" />

      <button>GO!</button>
    </form>
  </div>
);

export default Form;
