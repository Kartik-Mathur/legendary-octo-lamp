import React from "react";
import { useState } from "react";
import axios from "./api/axios";
import { useEffect } from "react";
import { useRef } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const nameRef = useRef();
  const descriptionRef = useRef();
  useEffect(() => {
    axios.get("/todos").then(({ data }) => {
      setTodos(data);
    });
  }, []);

  function addTodo() {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    if (!name || !description) return;
    
    axios
      .post("/todos", {
        name,
        description,
      })
      .then(({ data }) => {
        setTodos(data);
      });
  }

  return (
    <div>
      <h1>Todos Application</h1>

      <div>
        <input ref={nameRef} type="text" placeholder="Enter Task Name" />
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Enter Description"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      {todos.map((t) => {
        return (
          <li key={t._id}>
            {t.name} - {t.description}
          </li>
        );
      })}
    </div>
  );
};

export default App;
