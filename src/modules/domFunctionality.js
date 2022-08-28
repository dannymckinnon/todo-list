import { todoFactory, todoArray, addToArray, delFromArray } from "./appLogic";
export { setupEventListeners, displayTasks };


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

  document.querySelector('.submit-task-btn').addEventListener('click', e => {
    modal.style.display = 'none';
    addToArray(e);
    displayTasks(todoArray);
  });
  
  document.addEventListener('click', e => {
    delFromArray(e);
    // make a function to check which button  was last pressed then run the appropriate display function
  });

  document.querySelector('.today').addEventListener('click', event => {
    changeBackgroundColor(event);
    displayToday(todoArray);
  });

  document.querySelector('.all').addEventListener('click', event => {
    changeBackgroundColor(event);
    displayTasks(todoArray);
  });
}


function displayToday(array) {
  const date = new Date().toLocaleDateString();
  const result = array.filter(obj => obj.dueDate === date);
  displayTasks(result);
}


function displayTasks(array) {
  const taskContainer = document.querySelector('.task-container');
  document.querySelectorAll('.task').forEach(element => element.remove());

  for (let i = 0; i < array.length; i++) {
    const taskDiv = createDiv(array[i], i);
    taskContainer.appendChild(taskDiv);
  }  
}


function createDiv(obj, index) {
  const taskDiv = elementFromHtml(`
    <div class="task" data-index="${index}" style="border-left: 4px solid ${obj.priorityToColor()}">
      <div class="title">
        <input class="checkboxes" id="status${index}" type="checkbox">
        <label for="status${index}">${obj.title}</label>
      </div>
      <div class="date">${obj.dueDate}</div>
      <div class="del-edit-task">
        <button type="button"><img src="../src/images/edit.svg" alt="Edit"></button>
        <button type="button"><img class="del-task" src="../src/images/close.svg" alt="Delete"></button>
      </div>
      <p class="description">${obj.description}</p>
    </div>
  `);

  return taskDiv;
}

function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}


function changeBackgroundColor(event) {
  const menuBtn = document.querySelectorAll('.menu-btn');
    menuBtn.forEach(element => element.style.backgroundColor = 'transparent');
    event.target.style.backgroundColor = 'rgb(231, 231, 231)';
}


