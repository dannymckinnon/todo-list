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
      displayProjectTasks([]);
      document.querySelectorAll('.menu-btn').forEach(element => element.style.backgroundColor = 'transparent');
      displayProjects(projectArray);

    } else if (e.target.classList.contains('project-btn')) {
      changeBackgroundColor(e.target.closest('.project'));
      const index = e.target.closest('.project').getAttribute('data-index');
      displayProjectTasks(projectArray[index].todoArray);
      submitTaskBtn.classList.add('submit-proj-btn');
      submitTaskBtn.setAttribute('data-index', index); 

    } else if (e.target.classList.contains('del-task')) {
      delFromArray(e, todoArray);
      checkSelected();

    } else if (e.target.classList.contains('edit-task')) {
      editForm(e, todoArray);

    } else if (e.target.classList.contains('proj-del-task')) {
      const projIndex = document.querySelector('.submit-task-btn').getAttribute('data-index');
      delFromArray(e, projectArray[projIndex].todoArray);
      displayProjectTasks(projectArray[projIndex].todoArray); 

    } else if (e.target.classList.contains('proj-edit-task')) {
      const projects = document.querySelectorAll('.project');
      const project = [...projects].filter(element => element.style.backgroundColor === 'rgb(231, 231, 231)');
      const projIndex = project[0].getAttribute('data-index');
      editForm(e, projectArray[projIndex].todoArray, projIndex);
    }
  });

  // checkbox event listener
  document.addEventListener('change', e => {
    const projects = document.querySelectorAll('.project');
    const project = [...projects].filter(element => element.style.backgroundColor === 'rgb(231, 231, 231)');
    const task = e.target.closest('.task');
    
    if (e.target.getAttribute('type') === 'checkbox' && project.length === 0) {
      const index = task.getAttribute('data-index');
      
      if (e.target.checked) {
        task.classList.add('task-complete');
        todoArray[index].complete = true;

      } else {
        task.classList.remove('task-complete');
        todoArray[index].complete = false;
      }
    } else if (e.target.getAttribute('type') === 'checkbox' && project.length !== 0) {
      const index = task.getAttribute('data-index');
      const projIndex = project[0].getAttribute('data-index');

      if (e.target.checked) {
        task.classList.add('task-complete');
        projectArray[projIndex].todoArray[index].complete = true;

      } else {
        task.classList.remove('task-complete');
        projectArray[projIndex].todoArray[index].complete = false;
      }

    }
  });
  
  modal.addEventListener('click', () => {
      modal.style.display = 'none';
      resetForm();
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


  submitTaskBtn.addEventListener('click', e => {
    const index = submitTaskBtn.getAttribute('data-index');
    const projIndex = submitTaskBtn.getAttribute('data-proj-index');
    const classList = e.target.classList;
    if (classList.contains('submit-proj-btn') && classList.contains('submit-edit-task')) {
      submitTodoEdit(e, projectArray[projIndex].todoArray);
      displayProjectTasks(projectArray[projIndex].todoArray);

    } else if (classList.contains('submit-edit-task')) {
      submitTodoEdit(e, todoArray);
      checkSelected();
    
    } else if (classList.contains('submit-proj-btn')) {
      addToArray(projectArray[index].todoArray);
      displayProjectTasks(projectArray[index].todoArray);
      resetForm();
      modal.style.display = 'none';

    } else {
      modal.style.display = 'none';
      addToArray();
      checkSelected();
      resetForm();     
    }


    // if (e.target.classList.contains('submit-edit-task')) {

    //   if (e.target.classList.contains('.submit-proj-btn')) {
    //     submitTodoEdit(e, projectArray[index].todoArray);
    //     displayProjectTasks(projectArray[index].todoArray);

    //   } else {
    //     submitTodoEdit(e, todoArray);
    //     displayTasks(todoArray);
    //   }

    // } else if (e.target.classList.contains('submit-proj-btn') && !(e.target.classList.contains('.submit-edit-task'))) {
    //   addToArray(projectArray[index].todoArray);
    //   displayProjectTasks(projectArray[index].todoArray);
    //   resetForm();
    //   modal.style.display = 'none';

    // } else {
    //   modal.style.display = 'none';
    //   addToArray();
    //   checkSelected(todoArray)
    //   resetForm();
    // }
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
    for (let j = 0; j < todoArray.length; j++) {
      if (array[i] === todoArray[j]) {
        const taskDiv = createDiv(array[i], j, false);
        taskContainer.appendChild(taskDiv);
      }
    }
  }  
}


function createDiv(obj, index, boolean) {
  const del =  boolean ? 'proj-del-task' : 'del-task';
  const edit = boolean ? 'proj-edit-task' : 'edit-task';
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
        <button type="button"><img class="${edit}" src="../src/images/edit.svg" alt="Edit"></button>
        <button type="button"><img class="${del}" src="../src/images/close.svg" alt="Delete"></button>
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
    menuBtn.forEach(btn => btn.style.backgroundColor = 'transparent');
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

function displayProjectTasks(array) {
  const taskContainer = document.querySelector('.task-container');
  document.querySelectorAll('.task').forEach(element => element.remove());
  for (let i = 0; i < array.length; i++) {
    const taskDiv = createDiv(array[i], i, true);
    taskContainer.appendChild(taskDiv);
  }  
}