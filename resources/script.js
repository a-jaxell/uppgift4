const listArray = [];
const counter = 0;
// Declare variables for html elements
const addButton = document.querySelector("#addItem");
let inputField = document.querySelector("#inputTodo");

// Eventlisteners
addButton.addEventListener("click", addListItem);


//Function to add text from text inputField to array
function addListItem(){
     if(inputField.value == ""){  //Check if field is an empty string
        console.log("You must enter a value"); // prompt you must enter an item if true
     } else {
        console.log("value has been entered");
        listArray.push(inputField.value);
        inputField.value = null;
        console.log(listArray);

     }
}

// Function to send contents of array into an html list

// function to modify elements in list.
// Such as completed with strikethrough and deleting
console.log(listArray);
