import { useEffect, useState } from "react";

const UseEffectWithArray = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>useEffect run once times with empty array</h1>
      <p>Element render {count} times</p>
    </>
  );
};
export default UseEffectWithArray;
