//FUNCTION GET BUTTON CLICK
function inputDisplay(value) {
  document.getElementById("right_monitor").innerHTML += value;
}
//FUNCTION REMOVE
function removeDisplay() {
  var math = document.getElementById("right_monitor").innerHTML;
  var mathArr = math.split("");
  mathArr.length = mathArr.length - 1;

  document.getElementById("right_monitor").innerHTML = mathArr.join("");
}
//FUNCTION CLEAR
function clea() {
  document.getElementById("right_monitor").innerHTML = "";
  document.getElementById("left_monitor").innerHTML = "";
}
//FUNCTION TÍNH
function calc() {
  var mathDisplay = document.getElementById("right_monitor").innerHTML;

  var result = eval(mathDisplay);

  document.getElementById("right_monitor").innerHTML = result;

  document.getElementById("left_monitor").innerHTML = mathDisplay + " =";
  return result;
}
