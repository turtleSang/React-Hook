import { useReducer, useState } from "react";

const UseReducer = () => {
  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  const reducer = (state, action) => {
    let newState = state.map((item) => {
      if (item.id === action.id) {
        if (action.type === "done") {
          return { ...item, complete: true };
        } else {
          return { ...item, complete: false };
        }
      }
      return item;
    });
    return newState;
  };

  let [todo, dispatch] = useReducer(reducer, initialTodos);

  const handleClick = (item) => {
    if (item.complete) {
      dispatch({ id: item.id, type: "doing" });
    } else {
      dispatch({ id: item.id, type: "done" });
    }
  };

  return (
    <ul>
      {todo.map((item, index) => (
        <div key={index}>
          <input
            checked={item.complete ? true : false}
            type="checkbox"
            disabled
          />
          <li>
            {item.title} {item.complete ? "Đã hoàn thành" : "Chưa hoàn thành"}
          </li>
          <button onClick={() => handleClick(item)}>Check To Do</button>
        </div>
      ))}
    </ul>
  );
};

export default UseReducer;
