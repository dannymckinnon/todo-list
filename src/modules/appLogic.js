export { todoFactory, todoArray, createTodo };

const todoArray = [];

const todoFactory = (title, dueDate, priority, description) => {

  return { title, dueDate, priority, description };
};


function addTodo(todo) {
  todoArray.push(todo);
}

function createTodo() {
  //create todo using todoFactory and then push to todoArray
  //run displayTodo
}

