import { setupEventListeners, displayTasks, displayProjects } from './modules/domFunctionality.js';
import { todoArray, projectArray, localStorageToArray, projectLocalToArray } from './modules/appLogic.js';
import './styles/style.css';

setupEventListeners();
document.querySelector('.all').style.backgroundColor = 'rgb(231, 231, 231)';

localStorageToArray();
projectLocalToArray();


displayTasks(todoArray);
displayProjects(projectArray);