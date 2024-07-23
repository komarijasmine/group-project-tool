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
    if (newTaskText == "") {
        return
    }
    var newTaskHtml = `
        <br><input type="checkbox">
            <label>${newTaskText}</label>
        `;
    category.innerHTML += newTaskHtml;
    document.getElementById('new-task-text').value = "";
}

function testA (x) {
    var y = testB(x)
    console.log("testA = " + y) // 2
}

function testB (x) {
    x = x + 1 // 2 
    var y = testC(x) 
    console.log("testB = " + y) // testB = 3
    return y
}

function testC (x) {
    var y = x + 1 // 3 
    console.log("testC = " + y) // testC = 3
    return
}

/*
testB = 3
testA = 2
*/
