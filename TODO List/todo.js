function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  const priorityCheck = document.getElementById("priorityCheck");
  const taskList = document.getElementById("taskList");

  const text = taskInput.value.trim();
  const time = taskTime.value;
  const isPriority = priorityCheck.checked;

  if (text === "") {
    alert("⚠️ Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  if (isPriority) li.classList.add("priority");

  const taskHeader = document.createElement("div");
  taskHeader.className = "task-header";

  const taskTitle = document.createElement("span");
  taskTitle.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => taskList.removeChild(li);

  taskHeader.appendChild(taskTitle);
  taskHeader.appendChild(deleteBtn);
  li.appendChild(taskHeader);

  if (time) {
    const timeEl = document.createElement("div");
    timeEl.className = "task-time";
    timeEl.textContent = "📅 " + new Date(time).toLocaleString();
    li.appendChild(timeEl);
  }

  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
  priorityCheck.checked = false;
}
