var nextID = 1

function addTodoSection() {

    var container = document.getElementById("todo_sections");
    var todo_list = container.innerHTML;

    container.innerHTML = todo_list + "<div class='todo_section' id='todo_" + nextID + "'>" +
        "<h2>Unnamed To-Do Section " + nextID + "</h2>" + 
        "<br><input type='checkbox'> " +
        "<label>Task Description</label>" +
        "<br>" +
        "<input type='text' id='new-task-text' placeholder='New task description'>" + 
        "<button onclick='addTask('planning')'>Add Task</button>" +
        "</div>"
    nextID += 1;


}

function addTask(categoryId) {
    var category = document.getElementById(categoryId);
    var newTaskText = document.getElementById('new-task-text').value;
    var newTaskHtml = `
        <input type="checkbox">
            <label>${newTaskText}</label>
        </div>`;
    category.innerHTML += newTaskHtml;
    document.getElementById('new-task-text').value = "";
}


