import { useRef } from "react";

const UseRefDom = () => {
  const elementFocus = useRef();

  const handleClick = () => {
    let ele = elementFocus.current;
    ele.innerHTML = "Chao";
  };

  return (
    <>
      <p ref={elementFocus}>Hello</p>
      <button type="button" onClick={handleClick}>
        Log Element
      </button>
    </>
  );
};
export default UseRefDom;
