const todoOneInputEl = document.querySelector(".todo-one-js");
const todoArrOne = [];

function btnAddToDoTest() {
  todoOneInputEl.value && todoArrOne.push(todoOneInputEl.value);
  console.log(todoArrOne);
  todoOneInputEl.value = "";

  renderTodoListTest();
}

const todoTwoInputEl = document.querySelector(".todo-two-js");
const todoTwoListEl = document.querySelector(".todo-two-display-list");
const todoArrTwo = [];

function renderTodoListTest() {
  let todoListHTML = "";
  todoTwoInputEl.value && todoArrTwo.push(todoTwoInputEl.value);

  for (let i in todoArrTwo) {
    const todo = todoArrTwo[i];
    todoListHTML += `<li>${todo}</li>`;
  }

  todoTwoListEl.innerHTML = todoListHTML;

  todoTwoInputEl.value = "";
}

//////////////////////////////////////--- MAIN TODO------------------------------------
const todoListObj = JSON.parse(localStorage.getItem("todo-list")) || [
  {
    name: "animals",
    dueDate: "25/11/2025",
  },
  {
    name: "dishes",
    dueDate: "04/11/2025",
  },
];

renderTodoList();

function btnAddToDoList() {
  let todInputEl = document.querySelector(".todo-name-js");
  let todDateEl = document.querySelector(".todo-date-js");

  const name = todInputEl.value;
  const dueDate = todDateEl.value;

  if (!name && !dueDate) {
    alert("Please enter name & date");
    return;
  }

  console.log(todoListObj);

  const obj = {
    name,
    dueDate,
  };

  todoListObj.push(obj);
  localStorage.setItem("todo-list", JSON.stringify(todoListObj));

  renderTodoList();
  todInputEl.value = "";
  todDateEl.value = "";
}

function renderTodoList() {
  const todoListEl = document.querySelector(".js-todo-list");
  let html = "";
  todoListObj.forEach((todo) => {
    let { name, dueDate } = todo;
    html += `
          <div class="todo-row">
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="delete-todo-button" onclick="deleteTodo(
          ${i}
          )">Delete</button>
      </div>`;
  });
  todoListEl.innerHTML = html;
}

function deleteTodo(i) {
  todoListObj.splice(i, 1);
  localStorage.setItem("todo-list", JSON.stringify(todoListObj));
  console.log("deleted!");
  renderTodoList();
}
