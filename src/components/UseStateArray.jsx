import { useState } from "react";

const UseStateArray = () => {
  let [arr, setArr] = useState([
    { name: "Iphone", brand: "apple" },
    { name: "Galaxy", brand: "Samsung" },
    { name: "Mate", brand: "Huawei" },
  ]);

  let [inputs, setInput] = useState({});

  const handleDelete = (index) => {
    setArr(arr.filter((val, i) => i != index));
  };

  const handleOnChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = inputs.namePhone;
    let brand = inputs.brandPhone;
    let index = arr.findIndex((item) => item.name === name);
    if (index < 0) {
      setArr((values) => [...values, { name, brand }]);
    } else {
      arr[index] = { name, brand };
      setArr([...arr]);
    }
  };

  return (
    <>
      <h1>Use State with Array contains Object</h1>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            <span>
              Phone name: {item.name}, Brand name: {item.brand}
            </span>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form>
        <label htmlFor="namePhone">
          <input
            value={inputs.namePhone || ""}
            name="namePhone"
            type="text"
            placeholder="name"
            onChange={(event) => handleOnChange(event)}
          />
        </label>
        <label htmlFor="brandPhone">
          <input
            value={inputs.brandPhone || ""}
            name="brandPhone"
            type="text"
            placeholder="brand"
            onChange={(event) => handleOnChange(event)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UseStateArray;
