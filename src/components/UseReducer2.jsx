import { useReducer } from "react";

const UseReducer2 = () => {
  let init = { number: 1 };

  const reducer = (state, action) => {
    let number = 0;
    switch (action) {
      case "increase":
        number = state.number + 1;
        break;
      case "descrease":
        number = state.number - 1;
        break;
      case "double":
        number = state.number * 2;
        break;
      default:
        number = state.number;
        break;
    }
    return { number };
  };

  let [numState, dispatch] = useReducer(reducer, init);

  const handleClick = (type) => {
    dispatch(type);
  };

  return (
    <>
      <h2>Number is {numState.number}</h2>
      <button onClick={() => handleClick("increase")} type="button">
        Add one
      </button>
      <button onClick={() => handleClick("descrease")} type="button">
        Minus one
      </button>
      <button onClick={() => handleClick("double")} type="button">
        Double Number
      </button>
    </>
  );
};

export default UseReducer2;
