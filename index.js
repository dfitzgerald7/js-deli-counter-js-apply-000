var myInt = 1;

function takeANumber(line){
  var myNum = line.length; 
  line.push(myInt); //insert name into last position
  console.log("Welcome. You are number " + (myNum + 1) + " in line.")
  myInt++;
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

function currentLine(line){
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  else{
    var myString = "The line is currently: 1. " + line[0];
    var i = 1;
    for (i = 1; i < line.length; i++){
      myString += ", " + (i + 1) + ". " + line[i];
    }
    return myString
  }
}

var line = []

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(nowServing(line))
console.log(line)