import { setupEventListeners, displayAll } from './modules/domFunctionality.js';
import { todoArray } from './modules/appLogic.js';
import './styles/style.css';


setupEventListeners();
displayAll(todoArray);
