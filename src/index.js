import { setupEventListeners, displayTasks, change } from './modules/domFunctionality.js';
import { todoArray } from './modules/appLogic.js';
import './styles/style.css';


setupEventListeners();
document.querySelector('.all').style.backgroundColor = 'rgb(231, 231, 231)';
displayTasks(todoArray);


// localStorage.clear();
console.log(localStorage);