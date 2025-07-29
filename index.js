const display = document.getElementById("display");

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
}
