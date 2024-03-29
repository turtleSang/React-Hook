import { memo } from "react";

const ToDoList = ({ toDo, handleAddToDoList }) => {
  console.log("render");
  return (
    <>
      {toDo.map((itemToDo, index) => (
        <p key={index}>{itemToDo}</p>
      ))}
      <button onClick={handleAddToDoList}>Add to do</button>
    </>
  );
};

export default memo(ToDoList);
