const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

addButton.addEventListener("click", () => {
    const taskText = todoInput.value;

    if (taskText === "") {
        alert("Please type a task first!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    todoInput.value = "";
});