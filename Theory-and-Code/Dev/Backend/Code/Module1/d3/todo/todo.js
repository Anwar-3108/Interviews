const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", addTodo);

function addTodo() {
  const taskText = todoInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("todo-item");
  const span = document.createElement("span");
  span.textContent = taskText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-btn");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  editButton.addEventListener("click", () => {
    const newText = prompt("Enter updated task", taskText);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  todoInput.value = "";

  console.log(taskText);
}