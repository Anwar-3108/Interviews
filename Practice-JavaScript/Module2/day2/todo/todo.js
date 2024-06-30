submit.addEventListener("click", (e) => {
  e.preventDefault();
  AddTodos();
});


deletebtn.addEventListener("click", (e)=>{
e.preventDefault()
  localStorage.removeItem("todos") ;
  ShowTodos([])
})

function AddTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let newTodos = {
    id: Date.now(),
    title: title.value,
    desc: desc.value,
  };

  todos.push(newTodos);

  localStorage.setItem("todos", JSON.stringify(todos));
  ShowTodos(todos);

  title.value = "";
  desc.value = "";
}

function ShowTodos(todos) {
  todo.innerHTML = todos.map((items) => {
    return `
  
    <div class="container item-center" >
    <h3>${items.title}</h3>
    <p>${items.desc}</p>
    <button class="btn btn-danger" onclick="deteleTodo(${items.id})" >Delete</button>
    
    
    </div>
    
    
    
    `;
  });
}

function deteleTodo(id) {

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos = todos.filter((items) => items.id !== id);

  localStorage.setItem("todos", JSON.stringify(todos));

  ShowTodos(todos);
}

document.addEventListener("DOMContentLoaded", () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  ShowTodos(todos);
});
// 