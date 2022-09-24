function get_todos(){
    /* this create an array of tasks that are inputed*/
    var todos = new Array;
    /*this pulls the task that was savedin the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null the JSON.parse will communicate with the web browser to make the task a JavaScript object.*/
    if(todos_str!==null) {
        todos=JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add(){
    /*This takes the inputed task and create a variable of it */
    var task = document.getElementById("task").value;
    
    var todos =get_todos();
    /*This adds a new task at the end of the array*/
    todos.push(task);
    /*this converts the task input to JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
function show() {
    var todos =get_todos();
    var html ='<ul>';
    for (var i = 0; i< todos.length; i++) {
        html += '<li>' +todos[i]+ '<button class="remove" id="' + i + '">x</button></li>'; 
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML =html;
    var buttons = document.getElementsByClassName ('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
    

/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this wi;; keep the inputs displayes permanantly on the screen*/
show();

/* this function allows user to deleat an item from the array*/
function remove() {
    var id =this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo',JSON.stringify(todos));
    /*this looks at show() on how to display list after item on the screen is removed*/
    show();
    return false;
}

