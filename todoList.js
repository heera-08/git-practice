// todoList.js
let todos = ["Buy milk", "Walk dog", "Study Git"];

function addTodo(todo) {
    todos.push(todo);
}

function listTodos() {
    todos.forEach((todo, index) => {
        console.log(`${index + 1}: ${todo}`);
    });
}

addTodo("Practice Graph rag");
listTodos();
