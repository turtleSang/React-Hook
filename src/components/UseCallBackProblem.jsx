import { useState } from "react";

const ToDoList = ({ toDo, handleAddToDoList }) => {
  console.log("To do render");
  return (
    <>
      {toDo.map((itemToDo, index) => (
        <p key={index}>{itemToDo}</p>
      ))}
      <button onClick={handleAddToDoList}>Add to do</button>
    </>
  );
};

const UseCallBackProblem = () => {
  let [toDoList, setToDoList] = useState([]);
  let [number, setNumber] = useState(0);

  const handlePlusNumber = () => {
    setNumber(number + 1);
  };
  const handleAddToDoList = () => {
    setToDoList([...toDoList, "To Do"]);
  };

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
      {/* Todo list will re-render when number change number although toDoList not change */}
    </>
  );
};

export default UseCallBackProblem;
