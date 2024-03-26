import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  let [times, setTimes] = useState(0);

  // Run on every render
  useEffect(() => {
    setTimeout(() => {
      setTimes(times + 1);
    }, 1000);
  });

  return (
    <>
      <h1>useEffect no arguments</h1>
      <h2 style={{ color: "red" }}> render {times} times</h2>
    </>
  );
};

export default UseEffectBasic;
