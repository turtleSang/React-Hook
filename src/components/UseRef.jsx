import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  let [input, setInput] = useState("");
  const count = useRef(0);
  // Run on every render
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    count.current = count.current + 1;
  }, [input]);
  return (
    <>
      <input type="text" value={input} onChange={handleOnChange} />
      <h2> Input {input} times</h2>
      <h3>Render {count.current} times</h3>
    </>
  );
};

export default UseRef;
