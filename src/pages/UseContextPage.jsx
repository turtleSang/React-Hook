import { createContext, useState } from "react";
import UseContext from "../components/UseContext";

const CarContext = createContext();

const UseContextPage = () => {
  const carInfo = { name: "C200", brand: "Mercedes" };
  const [car, setCar] = useState(carInfo);
  return (
    <CarContext.Provider value={car}>
      <UseContext />
    </CarContext.Provider>
  );
};

export default UseContextPage;
export { CarContext };
