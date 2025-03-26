const tasks = [];
const addNewTaskButton = document.getElementById("new-task");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal-button");
const inputTask = document.getElementById("created-task");
const submitButton = document.querySelector("#submit-button");
const ulTasks = document.querySelector(".tasks__list");
const editModal = document.getElementById("modal-edit");
const editModalButton = document.getElementById("close-edited-modal-button");
const editTaskButton = document.getElementById("edit-button");
const editInput = document.getElementById("edited-task");
let oldInputTask;
function showModal() {
  if (modal.classList.contains("hidden")) modal.classList.remove("hidden");
  addNewTaskButton.setAttribute("disabled", "disabled");
  inputTask.focus();
  toggleBlur();
}

function closeModal() {
  if (!modal.classList.contains("hidden")) modal.classList.add("hidden");
  addNewTaskButton.removeAttribute("disabled");
  toggleBlur();
}

document.body.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("hidden") && e.key == "Escape") closeModal();
});

closeModalButton.addEventListener("click", (e) => {
  closeModal();
});

function toggleBlur() {
  const elementsToBlur = document.querySelectorAll(".blur-list");
  elementsToBlur.forEach((element) => {
    if (!element.classList.contains("blur")) {
      element.classList.add("blur");
    } else {
      element.classList.remove("blur");
    }
  });
}

function createNewTask() {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const buttonsContainer = document.createElement("div");
  const buttonEdit = document.createElement("button");
  const buttonDelete = document.createElement("button");
  li.classList.add("task");
  p.classList.add("task-content");
  p.textContent = inputTask.value.toLowerCase();
  li.appendChild(p);
  buttonsContainer.classList.add("buttons-container");
  buttonEdit.classList.add("button-edit");
  buttonEdit.innerHTML = '<i class="fa-solid fa-pencil fa-2xl"></i>';
  buttonsContainer.appendChild(buttonEdit);
  buttonDelete.classList.add("button-delete");
  buttonDelete.textContent = "X";
  buttonsContainer.appendChild(buttonDelete);
  li.appendChild(buttonsContainer);
  ulTasks.appendChild(li);
  inputTask.value = "";
}

addNewTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  showModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const taskName = inputTask.value.trim();
  const alertText = document.querySelector(".alert-text");
  if (inputTask.value === "") {
    alertText.textContent = "Please add a task!";
    alertText.classList.remove("hidden");
    return;
  } else if (tasks.includes(taskName)) {
    alertText.textContent = `Task "${taskName}" already exists`;
    alertText.classList.remove("hidden");
    inputTask.value = "";
    return;
  } else {
    alertText.classList.add("hidden");
    createNewTask();
    closeModal();
    tasks.push(taskName.toLowerCase());
  }
});

function showEditModal() {
  if (editModal.classList.contains("hidden"))
    editModal.classList.remove("hidden");
  addNewTaskButton.setAttribute("disabled", "disabled");
  editInput.focus();
  toggleBlur();
}

function closeEditModal() {
  if (!editModal.classList.contains("hidden"))
    editModal.classList.add("hidden");
  addNewTaskButton.removeAttribute("disabled");
  toggleBlur();
}

editModalButton.addEventListener("click", () => {
  closeEditModal();
});

function updateTask(taskText) {
  const tasks = document.querySelectorAll(".task");
  console.log(oldInputTask);
  tasks.forEach((task) => {
    let taskTitle = task.querySelector(".task-content");
    if (taskTitle.textContent == oldInputTask) {
      taskTitle.textContent = taskText.toLowerCase();
      closeEditModal();
      oldInputTask = taskText;
    }
  });
}

document.addEventListener("click", (e) => {
  const targetElement = e.target;
  const parentElement = targetElement.closest(".task");
  let toDoTitle;

  if (targetElement.classList.contains("button-delete")) {
    parentElement.remove();
    tasks.splice(tasks.indexOf(parentElement), 1);
  }

  if (targetElement.classList.contains("clear-all")) {
    ulTasks.innerHTML = "";
    tasks.length = 0;
  }

  if (parentElement && parentElement.querySelector(".task-content")) {
    toDoTitle = parentElement.querySelector(".task-content").textContent;
  }

  if (
    targetElement.classList.contains("button-edit") ||
    targetElement.classList.contains("fa-pencil")
  ) {
    showEditModal();
    editInput.value = toDoTitle;
    oldInputTask = toDoTitle;
  }
});

editTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  const editInputValue = editInput.value;
  if (editInputValue) {
    updateTask(editInputValue);
    editInput.value = "";
  }
});
