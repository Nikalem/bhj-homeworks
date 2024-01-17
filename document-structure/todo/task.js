const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const tasksForm = document.getElementById("tasks__form");

tasksForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInput.value.trim()) {
    taskList.innerHTML += `
    <div class="task">
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `
    taskInput.value = "";
  }
});

taskList.addEventListener("click", e => {

  if (e.target.classList.contains("task__remove")) {
    e.target.parentElement.remove();
  }
});