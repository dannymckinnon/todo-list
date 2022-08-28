import { setupEventListeners, displayTasks } from './modules/domFunctionality.js';
import { todoArray } from './modules/appLogic.js';
import './styles/style.css';


setupEventListeners();
displayTasks(todoArray);
