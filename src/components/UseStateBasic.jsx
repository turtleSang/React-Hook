import { useState } from "react";

const UseStateBasic = () => {
  const [color, setColor] = useState("red");

  const handleChangeColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <h1>Basic useState</h1>
      <h2
        style={{
          color,
        }}
      >
        This is my favorite color: {color}
      </h2>

      <button onClick={() => handleChangeColor("blue")}>Blue</button>
      <button onClick={() => handleChangeColor("yellow")}>Yellow</button>
      <button onClick={() => handleChangeColor("red")}>Red</button>
    </>
  );
};

export default UseStateBasic;
