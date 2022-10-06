const todoInput = $("#todo-form #todo");
const todoButton = todoInput.next();
const todoBoard = $("#todo-board");

todoButton.on("click", addTodo);

function addTodo() {
  const text = todoInput.val();
  const p = $("<p>");
  const checkbox = $("<input>").attr("type", "checkbox");
  const textNode = $("<span>").html(text);
  const button = $("<button>");

  p.append(checkbox);
  p.append(textNode);
  p.append(button);

  todoBoard.append(p);
  todoInput.val("");
  button.html("X");
  checkbox.on("click", todoCheck);
  button.on("click", todoDelete);
}

function todoCheck(e) {
  const p = e.target.parentNode;
  if (e.target.checked) p.style.color = "lightgray";
  else p.style.color = "black";
  todoCount();
}

function todoDelete(e) {
  const p = e.target.parentNode;
  p.remove();
  todoCount();
}

function todoCount() {
  let todoCounter = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  counter.innerHTML = todoCounter;
}
