let equalPressed = false;

function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("display").name = "";
  equalPressed = false;
}

function deleteLastChar() {
  let display = document.getElementById("display");
  if (
    display.value == "" ||
    display.name == "" ||
    display.value == "Please enter your operation"
  ) {
    return;
  } else {
    display.value = display.value.slice(0, -1);
    display.name = display.name.slice(0, -1);
  }
}

function appendValue(value, name) {
  var display = document.getElementById("display");
  if (equalPressed && !isNaN(value)) {
    clearDisplay(); // Clear display if equal was pressed and a number is pressed
  } else if (equalPressed && isNaN(value)) {
    equalPressed = false; // Reset the flag when an operator is pressed after equal
  }
  display.value += value;
  display.name += name;
}

function calculateResult() {
  var display = document.getElementById("display");
  if (display.value == "" || display.name == "") {
    display.value = "Please enter your operation";
  }
  if (display.value === "Please enter your operation") {
    return; // Do nothing if the placeholder message is present
  }

  display.value = eval(display.name);
  display.name = eval(display.name);
  equalPressed = true; // Set the flag to true
}
