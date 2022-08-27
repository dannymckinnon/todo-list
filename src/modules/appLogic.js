export { todoFactory, todoArray, addToArray };

const todoArray = [];

const todoFactory = (title, dueDate, priority, description) => {
  return { title, dueDate, priority, description };
};


function addToArray(event) {
  const title = document.querySelector('#title').value;
  const dueDate = document.querySelector('#due-date').value;
  const priority = document.querySelector('#priority').value;
  const description = document.querySelector('#description').value;

  const todo = todoFactory(title, dueDate, priority, description);

  todoArray.push(todo);
  console.log(todoArray.length);
}
