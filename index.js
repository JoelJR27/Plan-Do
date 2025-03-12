import { showModal, closeModalButton, closeModal } from "./js/modal.js";
import { createNewTask } from "./js/newTask.js";
import { markaAsComplete } from "./js/completeTask.js";
const addNewTaskButton = document.getElementById("new-task");
const submitButton = document.querySelector(".submit-button");

addNewTaskButton.addEventListener("click", (e) => {
  showModal();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  createNewTask();
  markaAsComplete();
});
