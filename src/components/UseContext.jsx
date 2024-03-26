import UseContextItem1 from "./UseContextItem1";
import { CarContext } from "../pages/UseContextPage";
import { useContext } from "react";

const UseContext = () => {
  let car = useContext(CarContext);

  return (
    <>
      <h1>useContext</h1>
      <h2>This {car.name}</h2>
      <UseContextItem1 />
    </>
  );
};

export default UseContext;
