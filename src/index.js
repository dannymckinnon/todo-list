import { setupEventListeners, displayTasks, change } from './modules/domFunctionality.js';
import { todoArray, localStorageToArray } from './modules/appLogic.js';
import './styles/style.css';


setupEventListeners();
document.querySelector('.all').style.backgroundColor = 'rgb(231, 231, 231)';

localStorageToArray();
displayTasks(todoArray);