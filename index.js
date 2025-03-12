import { showModal, closeModalButton, closeModal } from "./js/modal.js";
const addNewTaskButton = document.getElementById("new-task");
// function showModal() {
//     const modal = document.querySelector(".modal");
//   modal.classList.remove("hidden");
// }

addNewTaskButton.addEventListener("click", (e) => {
    showModal()
});

