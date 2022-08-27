import { todoFactory, todoArray, addToArray } from "./appLogic";
export { setupEventListeners, displayAll };


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


function displayAll(todoArray) {
  const taskContainer = document.querySelector('.task-container');

  todoArray.forEach(element => {
    const taskDiv = createDiv(element);
    taskContainer.appendChild(taskDiv);
  });  
}


function createDiv(obj) {
  const taskDiv = elementFromHtml(`
    <div class="task">
      <div class="title">
        <input id="status" type="checkbox">
        <label for="status">${obj.title}</label>
      </div>
      <div class="date">${obj.dueDate}</div>
      <div class="del-edit-task">
        <button type="button"><img src="../src/images/edit.svg" alt="Edit"></button>
        <button type="button"><img src="../src/images/close.svg" alt="Delete"></button>
      </div>
      <p class="description">${obj.description}</p>
    </div>
  `);

  return taskDiv;

  // const task = document.createElement('div').classList.add('task');
  
  // const title = document.createElement('div').classList.add('title');
  // const status = document.createElement('input').setAttribute('id', 'status')
  //                                               .setAttribute('type', 'checkbox');
  // const statusLabel = document.createElement('label').setAttribute('for', 'status');
  // statusLabel.innerHTML = obj.title;
  // title.append(status, statusLabel);

  // const date = document.createElement('div').classList.add('date')
  // date.innerHTML = obj.dueDate;
}

function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}



