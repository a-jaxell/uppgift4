const listArray = [];
const counter = 0;
const addButton = document.querySelector("#addItem");
const inputField = document.querySelector("#inputTodo");

addButton.addEventListener("click", addListItem);


//Function to add text from text inputField to array
function addListItem(){
     if(inputField == ""){  //Check if field is an empty string
        console.log("You must enter a value"); // prompt you must enter an item if true
     } else {
        console.log("value has been entered");
     }
}

// Function to send contents of array into an html list

// function to modify elements in list.
// Such as completed with strikethrough and deleting
console.log(listArray);
console.log(listArray);