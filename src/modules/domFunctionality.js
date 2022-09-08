import { todoFactory, todoArray, addToArray, delFromArray, editForm, submitTodoEdit, projectFactory, addToProjectArray, projectArray, removeProject } from "./appLogic";
export { setupEventListeners, displayTasks };


const todaysDate = new Date().toLocaleDateString();

function setupEventListeners() {
  const modal = document.querySelector('.task-modal');
  const submitTaskBtn = document.querySelector('.submit-task-btn');
  
  document.addEventListener('click', e => {
    if (e.target.classList.contains('del-project')) {
      removeProject(e);
      e.target.closest('.project').remove();
      displayProjects(projectArray);

    } else if (e.target.classList.contains('project-btn')) {
      changeBackgroundColor(e.target.closest('.project'));
      const index = e.target.closest('.project').getAttribute('data-index');
      displayTasks(projectArray[index].todoArray);
      submitTaskBtn.classList.add('submit-proj-btn');
      submitTaskBtn.setAttribute('data-index', index); 

    } else if (e.target.classList.contains('del-task')) {
      delFromArray(e);
      checkSelected();

    } else if (e.target.classList.contains('edit-task')) {
      editForm(e);
    }
  });

  // checkbox event listener
  document.addEventListener('change', e => {
    if (e.target.getAttribute('type') === 'checkbox') {
      const task = e.target.closest('.task');
      const index = task.getAttribute('data-index');
      if (e.target.checked) {
        task.classList.add('task-complete');
        todoArray[index].complete = true;
      } else {
        task.classList.remove('task-complete');
        todoArray[index].complete = false;
      }
    }
  });

  document.querySelector('.btn-new-task').addEventListener('click', () => {
    modal.style.display = 'block';

    document.querySelector('.form-title').innerHTML = 'New Task';
    submitTaskBtn.innerHTML = '+ Add Task';
    submitTaskBtn.classList.remove('submit-edit-task');
    const datePicker = document.querySelector('#due-date');
    datePicker.setAttribute('min', todaysDate);
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

  submitTaskBtn.addEventListener('click', e => {
    if (e.target.classList.contains('submit-edit-task')) {
      submitTodoEdit(e);
      checkSelected(todoArray)
    } else if (e.target.classList.contains('submit-proj-btn')) {
      const index = submitTaskBtn.getAttribute('data-index');
      addToArray(projectArray[index].todoArray);
      displayTasks(projectArray[index].todoArray);
      resetForm();
      modal.style.display = 'none';
    } else {
      modal.style.display = 'none';
      addToArray();
      checkSelected(todoArray)
      resetForm();
    }
  });
  
  
  document.querySelectorAll('.menu-btn').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('all')) {
        displayTasks(todoArray);
      } else if (e.target.classList.contains('today')) {
        const result = todoArray.filter(obj => obj.dueDate === todaysDate);
        displayTasks(result);
      } else if (e.target.classList.contains('upcoming')) {
        const result = todoArray.filter(obj => obj.dueDate !== todaysDate);
        displayTasks(result);
      }
      changeBackgroundColor(e.target);
      submitTaskBtn.classList.remove('submit-proj-btn');
    });
  })


  // projects event listeners
  document.querySelector('.btn-create-project').addEventListener('click', projectInputDisplay);
  
  document.querySelector('.close-proj-input').addEventListener('click', () => {
    projectInputDisplay();
  });

  document.querySelector('.submit-project-btn').addEventListener('click', e => {
    const title = document.querySelector('.project-input').value;
    addToProjectArray(title);
    displayProjects(projectArray);
    projectInputDisplay();
  });

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
  const complete = obj.complete ? 'checked' : 'unchecked';
  const checkboxClass = obj.complete ? 'task-complete' : '';
  const taskDiv = elementFromHtml(`
    <div class="task ${checkboxClass}" data-index="${index}" style="border-left: 4px solid ${obj.priorityToColor(obj.priority)}">
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


function changeBackgroundColor(element) {
  const menuBtn = document.querySelectorAll('.menu-btn');
    menuBtn.forEach(element => element.style.backgroundColor = 'transparent');
    element.style.backgroundColor = 'rgb(231, 231, 231)';
}


function checkSelected() {
  const menuBtn = document.querySelectorAll('.menu-btn');
  const btnArr = [...menuBtn].filter(element => element.style.backgroundColor !== 'transparent');
  const today = todoArray.filter(obj => obj.dueDate === todaysDate);
  const upcoming = todoArray.filter(obj => obj.dueDate !== todaysDate);
  if (btnArr.length === 0) {
    displayTasks(todoArray);
  } else if (btnArr[0].classList.contains('today')) {
    displayTasks(today);
  } else if (btnArr[0].classList.contains('upcoming')) {
    displayTasks(upcoming);
  } else if (btnArr[0].classList.contains('all')) {
    displayTasks(todoArray);
  }
}


function resetForm() {
  const inputs = document.querySelectorAll('.modal-input');
  inputs.forEach(element => element.value = '');
  document.querySelector('#priority').selectedIndex = 0;
  const datePicker = document.querySelector('#due-date');
  datePicker.value = todaysDate;
}


function projectInputDisplay() {
  const inputDisplay = document.querySelector('.create-proj-input');
  inputDisplay.style.display === 'none' ? inputDisplay.style.display = 'flex' : inputDisplay.style.display = 'none';
  inputDisplay.firstElementChild.value = '';
}


function displayProjects(array) {
  document.querySelectorAll('.project').forEach(project => project.remove());
  for (let i = 0; i < array.length; i++) {
    const taskDiv = elementFromHtml(`
    <div class="project menu-btn" data-index="${i}">
      <button class="project-btn" type="button">${array[i].title}</button>
      <button type="button" class="del-project"><img class="del-project" src="../src/images/close.svg" alt="Delete"></button>
    </div>
    `);

    document.querySelector('.menu').appendChild(taskDiv);
  }
}