import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodos, setnewTodos] = useState("");
  // const [storedTodos, setStoredTodos] = useState([])

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = () => {
    setTodos([...todos, { title: newTodos }]);
    console.log(newTodos);
    setnewTodos("");
  };

  const deletetodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <div>
          <h1>Todo</h1>
          <input
            placeholder="todo"
            value={newTodos}
            onChange={(e) => setnewTodos(e.target.value)}
          />
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            Add
          </button>
        </div>
        <div>
          {todos.map((e, index) => {
            return (
              <div key={index} style={{ display: "flex" }}>
                <h2>{e.title}</h2>
                <button
                  onClick={() => {
                    deletetodo(index);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
