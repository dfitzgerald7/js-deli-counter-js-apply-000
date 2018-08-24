
function takeANumber(line){
  var myNum = line.length; 
  line[myNum] = line.length; //insert name into last position
  console.log("Welcome. You are number " + (myNum + 1) + " in line.")
  return line
}

function nowServing(line){
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else{
    var customer = line[0]; // first in line
    line.splice(0,1); // removes 1 element starting at index 0, which is the first in line.
    return "Currently serving " + customer + ".";
  }
}

function currentLine(line)

var line = []

console.log(takeANumber(line))