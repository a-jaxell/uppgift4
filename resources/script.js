// Selectors
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
let counterNum = 0;
const counter = document.querySelector("#counter");
const error = document.querySelector("#error");
const list = document.querySelector("#list");

const promptError = "You must enter a task"
const promptDefault = "";

//Event listerners
addBtn.addEventListener('click', addBtnClick);
list.addEventListener('click', handleDeleteOrCheck);

//Functions
function addBtnClick(){
    if(input.value.length == 0){
        error.innerText = promptError;
        return;
    } else {
        error.innerText = promptDefault;

        const text = input.value;                   // the value of the input field is assigned to the variable text

        const item = document.createElement('li');   // Create a listitem and stores it in the variable item
        list.appendChild(item);                       // Appends a item as a child element to the element list

        const itemLabel = document.createElement('span'); // Creates a span element and stores it in variable called itemLabel
        itemLabel.innerText = text;                           // The value of the span element is set to that of the variable text
        itemLabel.setAttribute('class', 'listItem');
        item.appendChild(itemLabel);                        // appends the span element as a child element of the listitem
        
        const trashcan = document.createElement('span');
        trashcan.innerHTML = '&#x1F5D1';
        trashcan.setAttribute('class', 'trashcan');
        item.appendChild(trashcan);
    }
    input.value = "";
}
function handleDeleteOrCheck(e){
    if( e.target.getAttribute('class') == 'trashcan'){
        deleteTodo(e);
    }
    if( e.target.getAttribute('class') == 'listItem'){
    completedToggle(e);
    }
}

function completedToggle(e){                // Checks if element has the style class of completed and assigns it and increases the counter
    let item = e.target.parentNode;
    if( item.getAttribute('class') == 'completed'){
        item.setAttribute('class', '');
        counter.innerText = --counterNum + " Completed tasks";
    } else {
        item.setAttribute('class', 'completed');
        counter.innerText = ++counterNum + " Completed tasks";
    }
}

function deleteTodo(e){
    item = e.target.parentNode;
    item.remove();
}