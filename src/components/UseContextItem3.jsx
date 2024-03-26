import { useContext } from "react";
import { CarContext } from "../pages/UseContextPage";

const UseContextItem3 = () => {
  let carInfo = useContext(CarContext);
  return (
    <>
      <h1>
        Last Component this is {carInfo.name} of {carInfo.brand}
      </h1>
    </>
  );
};

export default UseContextItem3;
