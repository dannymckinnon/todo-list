import { displayTasks } from "./domFunctionality";

export { todoFactory, todoArray, addToArray, delFromArray, editForm, submitTodoEdit, projectFactory, addToProjectArray, projectArray, removeProject };

const todoArray = [];
const projectArray = [];

const todoFactory = (title, dueDate, priority, description) => {
  let complete = false;
  // working but needs a better solution
  const priorityToColor = (abc) => {
    if (abc === 'low') {
      return '#069C56';
    } else if (abc === 'medium') {
      return '#FF980E';
    } else if (abc === 'high') {
      return '#D3212C';
    }
  };

  return { title, dueDate, priorityToColor, description, complete, priority };
};


const projectFactory = (title) => {
  const todoArray = [];

  return { title, todoArray};
};


function addToArray(projTodoArray) {
  const title = document.querySelector('#title').value;
  const dueDate = document.querySelector('#due-date').value;
  const priority = document.querySelector('#priority').value;
  const description = document.querySelector('#description').value;

  const todo = todoFactory(title, dueDate, priority, description);
  
  if (arguments.length === 0) {
    todoArray.push(todo);
  } else {
    projTodoArray.push(todo);
  }  
}


function delFromArray(event) {
  const element = event.target;
  const index = element.closest('.task').getAttribute('data-index');
  todoArray.splice(index, 1);
}


function editForm(event) {
  const modal = document.querySelector('.task-modal');
  const index = event.target.closest('.task').getAttribute('data-index');
  const todoObj = todoArray[index];

  modal.style.display = 'block';
  const title = document.querySelector('#title');
  const priority = document.querySelector('#priority');
  const dueDate = document.querySelector('#due-date');
  const description = document.querySelector('#description');

  title.value = todoObj.title;
  dueDate.value = todoObj.dueDate;
  description.value = todoObj.description;

  if (todoObj.priority === 'low') {
    priority.selectedIndex = 0;
  } else if (todoObj.priority === 'medium') {
    priority.selectedIndex = 1;
  } else {
    priority.selectedIndex = 2;
  }

  const submitBtn = document.querySelector('.submit-task-btn');
  submitBtn.innerHTML = '+ Edit task'
  submitBtn.classList.add('submit-edit-task');
  submitBtn.setAttribute('data-index', index);

  document.querySelector('.form-title').innerHTML = 'Edit Task';
}


function submitTodoEdit(e) {
  const index = e.target.getAttribute('data-index');
  const title = document.querySelector('#title');
  const priority = document.querySelector('#priority');
  const dueDate = document.querySelector('#due-date');
  const description = document.querySelector('#description');
  todoArray[index].title = title.value;
  todoArray[index].priority = priority.value;
  todoArray[index].dueDate = dueDate.value;
  todoArray[index].description = description.value;

  e.target.classList.remove('submit-edit-task');
  document.querySelector('.task-modal').style.display = 'none';
}


// Project functions
function addToProjectArray(title) {
  projectArray.push(projectFactory(title));
}

function removeProject(e) {
  const index = e.target.getAttribute('data-index');
  projectArray.splice(index, 1);
}

