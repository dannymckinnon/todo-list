import { todoFactory, todoArray, addToArray } from "./appLogic";
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

  document.querySelector('.task-form').addEventListener('submit', addToArray);
}


function displayTodo(todoArray) {
  //logic to display each todoArray in html 
}