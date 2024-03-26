import { useEffect, useState } from "react";

const UseEffectWithState = () => {
  let [number, setNumber] = useState(0);
  let [calculate, setCalculate] = useState(0);

  let handleClickPlus = () => {
    setNumber((num) => ++num);
  };

  useEffect(() => {
    setCalculate(() => number * 2);
  }, [number]);

  return (
    <>
      <h1>useEffect with argument is state or props</h1>
      <p>Number is {number}</p>
      <button onClick={handleClickPlus}>+</button>
      <p>Calculate is {calculate}</p>
    </>
  );
};

export default UseEffectWithState;
