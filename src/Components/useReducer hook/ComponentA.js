import React, { useContext } from "react";
import { CountContext } from "../../App";
function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>Component-A {countContext.countState}</h1>

      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}

export default ComponentA;
