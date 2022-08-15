import { useRef, useState } from "react";

const usePreviousPersistent = (value: number) => {
  const ref = useRef<{
    value: number;
    prev: number | null;
  }>({
    value,
    prev: null
  });

  const current = ref.current.value;
  if (value !== current) {
    ref.current = {
      value,
      prev: current
    };
  }

  return ref.current.prev;
};

/**
 * 훅 안에서 다른 상태를 관리하게 되면
 * 이를 사용하는 host 컴포넌트는 re-render를 하는 경우의 수가 증가함.
 * @param value
 */
const usePreviousPersistentState = (value: number) => {
  const [state, setState] = useState<{
    value: number;
    prev: null | number;
  }>({
    value,
    prev: null
  });

  const current = state.value;
  if (value !== current) {
    setState({
      value,
      prev: current
    });
  }

  return state.prev;
};

export { usePreviousPersistent, usePreviousPersistentState };
