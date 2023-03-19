// Get the form and input elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

// Get the to-do list element
const todoList = document.querySelector("#todo-list");

// Get the clear button element
const clearBtn = document.querySelector("#clear-btn");

// Add event listener to the form submit event
todoForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the value of the input element
  const todoText = todoInput.value;

  // Create a new list item element
  const newTodo = document.createElement("li");
  newTodo.classList.add("list-group-item");
  newTodo.innerHTML = `
		<span>${todoText}</span>
		<i class="delete-btn fas fa-trash-alt"></i>
	`;

  // Add the new list item to the to-do list
  todoList.appendChild(newTodo);

  // Clear the input field
  todoInput.value = "";
});

// Add event listener to the clear button click event
clearBtn.addEventListener("click", function () {
  // Remove all list items from the to-do list
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});

// Add event listener to the delete button click event
todoList.addEventListener("click", function (event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains("delete-btn")) {
    // Remove the corresponding list item from the to-do list
    event.target.parentElement.remove();
  }
});
