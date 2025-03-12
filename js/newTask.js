const tasks = [];
export function createNewTask() {
  const taskList = document.querySelector(".tasks__list");
  const inputTask = document.getElementById("created-task");
  let obtainedTask = inputTask.value;
  if (obtainedTask === "") return;
  if (tasks.includes(obtainedTask.trim())) {
    alert("This task already exists");
    return;
  }
  tasks.push(obtainedTask);
  const li = document.createElement("li");
  li.classList.add("task");
  tasks.map((task) => {
    li.innerHTML = `
    <label for="task" class="task-label">
               <input type="checkbox" id=${task}/>
               <p class="task-content" id=${task}>${task}</p>
             </label>
             <div class="task__buttons">
              <i class="fa-solid fa-pencil fa-xl"></i>
               <i class="fa-solid fa-square-xmark fa-xl"></i>
             </div>`;
    taskList.appendChild(li);
  });
  inputTask.value = "";
  console.log(taskList);
}
