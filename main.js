var nextID = 2

function addInnerDiv() {
    var container = document.getElementById("todo_sections")
    var todo_list = container.innerHTML
    container.innerHTML = "<div class='todo_section' id='todo_" + nextID +"'></div>" + todo_list
    nextID += 1
}


