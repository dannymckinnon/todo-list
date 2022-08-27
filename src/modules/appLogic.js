import { displayAll } from "./domFunctionality";

export { todoFactory, todoArray, addToArray, delFromArray };

const todoArray = [];

const todoFactory = (title, dueDate, priority, description) => {
  const priorityToColor = () => {
    if (priority === 'low') {
      return '#069C56';
    } else if (priority === 'medium') {
      return '#FF980E';
    } else if (priority === 'high') {
      return '#D3212C';
    }
  };

  return { title, dueDate, priorityToColor, description };
};


function addToArray(event) {
  const title = document.querySelector('#title').value;
  const dueDate = document.querySelector('#due-date').value;
  const priority = document.querySelector('#priority').value;
  const description = document.querySelector('#description').value;

  const todo = todoFactory(title, dueDate, priority, description);

  todoArray.push(todo);
}


function delFromArray(event) {
  const element = event.target;
  if (element.classList.contains('del-task')) {
    const index = element.closest('.task').getAttribute('data-index');
    todoArray.splice(index, 1);
    displayAll(todoArray);
  }
}
