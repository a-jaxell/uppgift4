// Selectors
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
let counterNum = 0;
const counter = document.querySelector("#counter");
const error = document.querySelector("#error");

const list = document.querySelector("#list");
const item = document.createElement('li');
const itemLabel = document.createElement('span');


const promptError = "You must enter a task"
const promptDefault = "";

//Event listerners
addBtn.addEventListener('click', addBtnClick);
itemLabel.addEventListener('click', completedToggle);

//Functions
function addBtnClick(){
    if(input.value == 0){
        error.innerText = promptError;
        return;
    } else {
        error.innerText = promptDefault;
        const text = input.value;

        list.appendChild(item);

        itemLabel.innerText = text;
        item.appendChild(itemLabel);

    }
    input.value = "";
}
function completedToggle(){
    if( item.getAttribute('class') == 'completed'){
        item.setAttribute('class', '');
        counter.innerText = --counterNum + " Completed tasks";
    } else {
        item.setAttribute('class', 'completed');
        counter.innerText = ++counterNum + " Completed tasks";
    }
}