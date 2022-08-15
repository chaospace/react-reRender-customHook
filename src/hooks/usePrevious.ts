import { useEffect, useRef } from "react";

const usePrevious = (value: number) => {
  const ref = useRef<number>(-1);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
