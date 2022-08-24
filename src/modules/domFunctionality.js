import { todoFactory, todoArray, createTodo } from "./appLogic";
export { setupEventListeners };


function setupEventListeners() {
  const modal = document.querySelector('.task-modal');

  
  document.querySelector('.btn-new-task').addEventListener('click', () => {
    modal.style.display = 'block';
  });

  document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  document.querySelector('.form-container').addEventListener('click', e => {
    e.stopPropagation();
  });

  modal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  document.querySelector('form').addEventListener('submit', createTodo(e));

  const jeff = todoFactory('asdfsdf', '3/3/3/3', 'low', 'sdafsadfasdf');
  todoArray.push(jeff)
  console.log(todoArray[0].title);
}




function displayTodo(todoArray) {
  //logic to display each todoArray in html 
}