import { useState } from "react";

const CarInfo = ({ info }) => {
  const checkNull = (object) => {
    return Object.keys(object).length != 0;
  };

  if (checkNull(info)) {
    let { name, brand, color } = info;
    return (
      <h2 style={{ color: "brown" }}>
        Car name: {name}, Car Brand: {brand}, Car Color: {color}
      </h2>
    );
  }
  return <h2 style={{ color: "brown" }}>Not Infomation</h2>;
};

const UseStateObject = () => {
  let [car, setCar] = useState({});

  const handleChangeCar = ({ name, brand, color }) => {
    setCar({ name, brand, color });
  };

  return (
    <>
      <h1>useState with Object</h1>
      <CarInfo info={car} />
      <button
        onClick={() =>
          handleChangeCar({ name: "C200", brand: "Mercedes", color: "white" })
        }
      >
        Get Mercedes
      </button>
      <button
        onClick={() =>
          handleChangeCar({ name: "Camry", brand: "Toyota", color: "Red" })
        }
      >
        Get Toyota
      </button>
    </>
  );
};

export default UseStateObject;
