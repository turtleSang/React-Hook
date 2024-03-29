import { useCallback, useState, memo } from "react";
import ToDoList from "./UseCallBackItem";

const UseCallBack = () => {
  let [toDoList, setToDoList] = useState([]);
  let [number, setNumber] = useState(0);

  const handlePlusNumber = () => {
    setNumber(number + 1);
  };
  const handleAddToDoList = useCallback(() => {
    setToDoList([...toDoList, "To do"]);
  }, [toDoList]);

  return (
    <>
      <div>
        <ToDoList handleAddToDoList={handleAddToDoList} toDo={toDoList} />
      </div>
      <hr />
      <div>
        <p>Number is {number}</p>
        <button type="button" onClick={handlePlusNumber}>
          Add number
        </button>
      </div>
    </>
  );
};

export default UseCallBack;
