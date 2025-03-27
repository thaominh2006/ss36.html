let input = document.getElementById("taskName")
let addButton = document.querySelector('.task-input button')
let pending = document.getElementById("pendingTasks")
let inProgressTasks = document.getElementById("inProgressTasks")
let doneTasks = document.getElementById("doneTasks")
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function displaySaveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};
function renderTasks() {
    pending.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach((task, index) => {
        let taskElement = document.createElement("div")
        taskElement.classList.add("task")
        let taskContent = document.createElement("p")
        taskContent.textContent = task.name;
        taskElement.appendChild(taskContent);
        if (task.status === "pending") {
            let nextButton = document.createElement("button")
            nextButton.textContent = "Chuyen tiep"
            nextButton.addEventListener("click", function () {
                task.status = "inProgress"
                renderTasks();
                displaySaveTask();
            });
            taskElement.appendChild(nextButton);
            pending.appendChild(taskElement);
        } else if (task.status === "inProgress") {
            let nextButton = document.createElement("button")
            nextButton.textContent = "done"
            nextButton.addEventListener("click", function () {
                task.status = "done";
                renderTasks();
                displaySaveTask();
            });
            taskElement.appendChild(nextButton);
            inProgressTasks.appendChild(taskElement);
        } else if (task.status === "done") {
            doneTasks.appendChild(taskElement);
        }
    })
}
addButton.addEventListener("click", function(){
    let taskName = input.value.trim();
    if(taskName){
        let newTask = {
            name: taskName,
            status: "pending",
        }
        tasks.push(newTask);
        input.value = "";
        renderTasks();
        displaySaveTask();
    }
});
renderTasks();