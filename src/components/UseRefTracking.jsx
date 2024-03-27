import { useEffect, useRef, useState } from "react";

const UseRefTracking = () => {
  let [inputVal, setInputVal] = useState("");
  let previousVal = useRef("");

  const handleOnChange = (event) => {
    setInputVal(event.target.value);
  };

  useEffect(() => {
    previousVal.current = inputVal;
  }, [inputVal]);

  return (
    <>
      <h2>Tracking State Change</h2>
      <input value={inputVal} type="text" onChange={handleOnChange} />
      <h2>Current Val {inputVal}</h2>
      <h2>Previous Val {previousVal.current}</h2>
    </>
  );
};

export default UseRefTracking;
