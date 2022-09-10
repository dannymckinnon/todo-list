import { setupEventListeners, displayTasks, displayProjects } from './modules/domFunctionality.js';
import { todoArray, projectArray, localStorageToArray, projectLocalToArray } from './modules/appLogic.js';
import './styles/style.css';
import add from './images/add.svg';
import check from './images/check.svg';
import close from './images/close.svg';
import edit from './images/edit.svg';
import inbox from './images/inbox.svg';
import projects from './images/projects.svg';
import today from './images/today.svg';
import upcoming from './images/upcoming.svg';

setupEventListeners();
document.querySelector('.all').style.backgroundColor = 'rgb(231, 231, 231)';

localStorageToArray();
projectLocalToArray();

displayTasks(todoArray);
displayProjects(projectArray);