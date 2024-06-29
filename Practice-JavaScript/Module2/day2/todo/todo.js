submit.addEventListener("click", (e) => {
  e.preventDefault();
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  let newTodos = {
    id: Date.now(),
    titile: title.value,
    desc: desc.value,
  };

  todos.push(newTodos);

  localStorage.setItem("todos", JSON.stringify(todos));
  updateTodos(todos);

  title.value = "";
  desc.value = "";
});

deletebtn.addEventListener("click", () => {
  localStorage.removeItem("todos");
  updateTodos([]);
});

function updateTodos(todos) {
  todo.innerHTML = todos.map((todoItems) => {
    return `<div class="card">
    <h5 class="card-header">${todoItems.titile}</h5>
    <div class="card-body">
      <p class="card-text">${todoItems.desc}</p>
    </div>
    <button class="btn btn-danger" onclick="deleteTodo(${todoItems.id})">Delete</button>
  </div>`;
  });
}

function deleteTodo(id) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => todo.id !== id); // Remove the todo with the specified id
  localStorage.setItem("todos", JSON.stringify(todos));
  updateTodos(todos);
}

document.addEventListener("DOMContentLoaded", () => {
  updateTodos(JSON.parse(localStorage.getItem("todos")||[]));
});
