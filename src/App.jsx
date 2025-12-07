import React from "react";
import { useState } from "react";
import axios from "./api/axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/todos").then(({ data }) => {
      console.log(data);
      setTodos(data);
    });
  }, []);

  return (
    <div>
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
