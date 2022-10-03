// Selectors
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const counter = document.querySelector("#counter");
const error = document.querySelector("#error");
const list = document.querySelector("#list");

//Global variables
let counterNum = 0;
let id = 0;
let i = -1;
const promptError = "You must enter a task"
const promptDefault = "";
const taskArray = [];
//const taskObj = { task: "", done: false, deleted: false};

//Event listerners
addBtn.addEventListener('click', addBtnClick);
list.addEventListener('click', handleDeleteOrCheck);

//Event handlers
function addBtnClick(){
    if(input.value.length == 0){
        error.innerText = promptError;
        return;
    } else {
        i++;
        error.innerText = promptDefault;
        const text = input.value;                   // the value of the input field is assigned to the variable text
        taskArray.push(new task(id, text, false, false)); // Creates a new object and pushes it to taskArray

        const item = document.createElement('li');   // Create a listitem and stores it in the variable item
        list.appendChild(item);                       // Appends a item as a child element to the element list

        const itemLabel = document.createElement('span'); // Creates a span element and stores it in variable called itemLabel
        itemLabel.innerText = taskArray[i].task;                           // The value of the span element is set to that of the variable text
        itemLabel.setAttribute('class', 'listItem');
        item.appendChild(itemLabel);                        // appends the span element as a child element of the listitem
        
        const trashcan = document.createElement('span');
        trashcan.innerHTML = '&#x1F5D1';
        // trashcan.setAttribute('class', 'trashcan');
        trashcan.classList.add(`${taskArray[i].id}`);
        item.appendChild(trashcan);
        id++;
    }
    input.value = "";
}
function handleDeleteOrCheck(e){
    // if( e.target.getAttribute('class') == 'trashcan'){
    if(e.target.classList.contains(objectCheck(taskArray, e.target.getAttribute('class')))){
        taskArray[e.target.getAttribute('class')].deleted = true;
        deleteTodo(e);
    }
    if( e.target.getAttribute('class') == 'listItem'){
    completedToggle(e);
    }
}
// Helper functions
function completedToggle(e){                // Checks if element has the style class of completed and assigns it and increases the counter
    let item = e.target.parentNode;
    if( item.getAttribute('class') == 'completed'){
        item.setAttribute('class', '');
        taskArray[objectHandler(taskArray, e.target.innerText)].done = false;
        counter.innerText = --counterNum + " Completed tasks";
    } else {
        item.setAttribute('class', 'completed');
        taskArray[objectHandler(taskArray, e.target.innerText)].done = true;
        counter.innerText = ++counterNum + " Completed tasks";
    }
}

function deleteTodo(e){
    item = e.target.parentNode;
    if(item.getAttribute('class') == 'completed'){  // Updating number of completed tasks
        counter.innerText = --counterNum + " Completed tasks";
    }
    item.remove();
}
// Constructor for Task objects
function task(id, task, done, deleted){
    this.id = id;
    this.task = task;
    this.done = done;
    this.deleted = deleted;
}
// Searches the array for string and returns object index for matching task
function objectHandler(array, string){
    for(i = 0; i < array.length; i++){
        if(string == array[i].task){
            return array[i].id;
        }
    }
}
//checks if an array contains a certain id and returns id if true
function objectCheck(array, index){
    for(i = 0; i < array.length; i++){
        if(index == array[i].id){
            return array[i].id;
        }
    }
}