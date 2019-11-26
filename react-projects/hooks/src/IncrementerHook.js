import React, {useState} from "react";

function IncrementerHook() {
    const[count, setCount]=useState(0);

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount(count+1)}>Add 1</button>
    </div>
  );
}
export default IncrementerHook;