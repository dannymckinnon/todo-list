let newTaskBtn = document.querySelector('.btn-new-task');
let modal = document.querySelector('.task-modal');
let closeModal = document.querySelector('.close-modal');

newTaskBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

