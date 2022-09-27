// Selectors
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const text = input.value;
const counter = document.querySelector("#counter");
const error = document.querySelector("#error");
const list = document.querySelector("#list");

const promptError = "You must enter a task"
const promptDefault = "";

//Event listerners
addBtn.addEventListener('click', addBtnClick);

//Functions
function addBtnClick(){
    if(input.value == 0){
        error.innerText = promptError;
        return;
    } else {
        error.innerText = promptDefault;
    }
    input.value = "";
}