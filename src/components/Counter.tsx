import React, { useRef, useState } from "react";

const Counter = () => {
  const [stateCounter, setStateCounter] = useState<number>(0);
  const ref = useRef<number>(0);

  return (
    <>
      <button onClick={() => setStateCounter(stateCounter + 1)}>
        update state counter
      </button>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
        }}
      >
        update ref counter
      </button>
      State counter value: {stateCounter}
      Ref counter value: {ref.current}
    </>
  );
};

export default Counter;
