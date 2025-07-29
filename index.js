const display = document.getElementById("display");

<<<<<<< HEAD
// Append clicked button value to the display
function appendToDisplay(input) {
  display.value += input;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the expression in the display
function calculate() {
  try {
    // Use eval carefully — could add further validation here
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
=======
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

>>>>>>> 362ea67387e9360588506b6bbf7541443e582edd
}
