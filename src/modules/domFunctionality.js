export { setupEventListeners };


function setupEventListeners() {
  let modal = document.querySelector('.task-modal');

  
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

  document.querySelector('.menu').addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
      console.log(e.target);
      e.target.style.backgroundColor = 'blue';
    }
    console.log(e.target);
  });
}