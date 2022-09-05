import { todoFactory, todoArray, addToArray, delFromArray, editForm, submitTodoEdit } from "./appLogic";
export { setupEventListeners, displayTasks };




function setupEventListeners() {
  const modal = document.querySelector('.task-modal');
  
  document.querySelector('.btn-new-task').addEventListener('click', () => {
    modal.style.display = 'block';
    document.querySelector('.form-title').innerHTML = 'New Task';
    const submitTaskBtn = document.querySelector('.submit-task-btn');
    submitTaskBtn.innerHTML = '+ Add Task';
    submitTaskBtn.classList.remove('submit-edit-task');
    const today = new Date().toLocaleDateString();
    const datePicker = document.querySelector('#due-date');
    datePicker.setAttribute('min', today);
    resetForm();
  });

  document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
    resetForm();
  });

  document.querySelector('.form-container').addEventListener('click', event => {
    event.stopPropagation();
  });

  modal.addEventListener('click', () => {
      modal.style.display = 'none';
      resetForm();
  });

  document.querySelector('.submit-task-btn').addEventListener('click', event => {
    if (event.target.classList.contains('submit-edit-task')) {
      submitTodoEdit(event);
      displayTasks(todoArray);
    } else {
      modal.style.display = 'none';
      addToArray(event);
      displayTasks(todoArray);
      resetForm();
    }
  });
  
  document.addEventListener('click', event => {
    if (event.target.classList.contains('del-task')) {
      delFromArray(event);
      checkSelected(event);
    } else if (event.target.classList.contains('edit-task')) {
      editForm(event);
    }
  });
  
  // menu button event listeners
  document.querySelector('.all').addEventListener('click', event => {
    changeBackgroundColor(event);
    displayTasks(todoArray);
  });

  document.querySelector('.today').addEventListener('click', event => {
    changeBackgroundColor(event);
    displayToday(todoArray);
  });

  document.querySelector('.upcoming').addEventListener('click', event => {
    changeBackgroundColor(event);
    displayUpcoming(todoArray);
  });

  // checkbox event listener
  document.addEventListener('change', event => {
    if (event.target.getAttribute('type') === 'checkbox') {
      const task = event.target.closest('.task');
      const index = task.getAttribute('data-index');
      if (event.target.checked) {
        task.classList.add('task-complete');
        todoArray[index].complete = true;
      } else {
        task.classList.remove('task-complete');
        todoArray[index].complete = false;
      }
    }
  });

  // projects event listeners
  document.querySelector('.btn-create-project').addEventListener('click', projectInputDisplay);
  
  document.querySelector('.close-proj-input').addEventListener('click', () => {
    projectInputDisplay();
  });

  document.querySelector('.submit-project-btn').addEventListener('click', e => {
    document.querySelector('.menu').appendChild(createProject(e));
    projectInputDisplay();
  });
  
}



function displayTasks(array) {
  const taskContainer = document.querySelector('.task-container');
  document.querySelectorAll('.task').forEach(element => element.remove());
  
  for (let i = 0; i < todoArray.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === todoArray[i]) {
        const taskDiv = createDiv(array[j], i);
        taskContainer.appendChild(taskDiv);
      }
    }
  }  
}


function displayToday(array) {
  const date = new Date().toLocaleDateString();
  const result = array.filter(obj => obj.dueDate === date);
  displayTasks(result);
}


function displayUpcoming(array) {
  const date = new Date().toLocaleDateString();
  const result = array.filter(obj => obj.dueDate !== date);
  displayTasks(result);
}


function createDiv(obj, index) {
  const complete = obj.complete ? 'checked' : 'unchecked';
  const checkboxClass = obj.complete ? 'task-complete' : '';
  const taskDiv = elementFromHtml(`
    <div class="task ${checkboxClass}" data-index="${index}" style="border-left: 4px solid ${obj.priorityToColor()}">
      <div class="title">
        <input id="status${index}" type="checkbox" ${complete}>
        <label for="status${index}">${obj.title}</label>
      </div>
      <div class="date">${obj.dueDate}</div>
      <div class="del-edit-task">
        <button class="edit-task" type="button"><img class="edit-task" src="../src/images/edit.svg" alt="Edit"></button>
        <button class="del-task" type="button"><img class="del-task" src="../src/images/close.svg" alt="Delete"></button>
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


function checkSelected(event) {
  const menuBtn = document.querySelectorAll('.menu-btn');
  const btnArr = [...menuBtn].filter(element => element.style.backgroundColor !== 'transparent');
  if (btnArr.length === 0) {
    displayTasks(todoArray);
  } else if (btnArr[0].classList.contains('today')) {
    displayToday(todoArray);
  } else if (btnArr[0].classList.contains('upcoming')) {
    displayUpcoming(todoArray);
  } else if (btnArr[0].classList.contains('all')) {
    displayTasks(todoArray);
  }
}

function resetForm() {
  const inputs = document.querySelectorAll('.modal-input');
  inputs.forEach(element => element.value = '');
  document.querySelector('#priority').selectedIndex = 0;
  const today = new Date().toLocaleDateString();
  const datePicker = document.querySelector('#due-date');
  datePicker.value = today;
}

function projectInputDisplay() {
  const inputDisplay = document.querySelector('.create-proj-input');
  inputDisplay.style.display === 'none' ? inputDisplay.style.display = 'flex' : inputDisplay.style.display = 'none';
  inputDisplay.firstElementChild.value = '';
}

function createProject(event) {
  const title = document.querySelector('.project-input');
  const taskDiv = elementFromHtml(`
  <div class="project">
    <button type="button">${title.value}</button>
    <button type="button" class="del-project"><img src="../src/images/close.svg" alt="Delete"></button>
  </div>
  `);

  return taskDiv;
}