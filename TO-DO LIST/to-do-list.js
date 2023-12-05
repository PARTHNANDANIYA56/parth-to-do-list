var todoarray = [];

function savetask() {
    var taskName = document.getElementById("txtitem").value;
    var todoObject = {
        taskId: todoarray.length + 1,
        taskName: taskName
    };
    todoarray.push(todoObject);
    renderTaskListe();
}

function renderTaskListe() {
    document.getElementById("myTaskList").innerHTML = " ";
    for (var index = 0; index < todoarray.length; index++) {
        var dynamicli = document.createElement("li");
        dynamicli.classList.add("task");
        var myLabel = document.createElement("label");
        var myPara = document.createElement("p");
        myPara.textContent = todoarray[index].taskName;
        myLabel.appendChild(myPara);
        dynamicli.appendChild(myLabel);

        var myDiv = document.createElement("div");
        myDiv.classList.add("setting");
        var editIcon = document.createElement("i");
        editIcon.classList.add("fa-regular", "fa-pen-to-square");
        editIcon.addEventListener("click", editTask);
        editIcon.taskId = todoarray[index].taskId;
        var deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-regular", "fa-trash-can");
        deleteIcon.addEventListener("click", deleteTask);
        deleteIcon.taskId = todoarray[index].taskId;
        myDiv.appendChild(editIcon);
        myDiv.appendChild(deleteIcon);
        dynamicli.appendChild(myDiv);

        document.getElementById("myTaskList").appendChild(dynamicli);
    }

    function deleteTask(event) {
        var index = todoarray.findIndex(m => m.taskId == event.target.taskId);
        todoarray.splice(index, 1);
        renderTaskListe();
    }

    function editTask(event) {
        var taskIdToEdit = event.target.taskId;
        var updatedTaskName = prompt("Edit task:", "");

        if (updatedTaskName !== null) {
            var taskIndex = todoarray.findIndex(task => task.taskId == taskIdToEdit);
            todoarray[taskIndex].taskName = updatedTaskName;
            renderTaskListe();
        }
    }
}
