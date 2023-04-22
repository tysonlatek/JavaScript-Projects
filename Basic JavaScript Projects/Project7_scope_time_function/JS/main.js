// Variable outside of a function are global meaning they can be called from anywhere in the program
// Variables within a function are local and can only be used within the function
var A = 14;
function Time() {
    if (new Date().getHours() < A) {
        document.getElementById("Hello").innerHTML = "How is your day so far?";
    }
}
// If statements only execute if a condition is true
if (10 < 100) {
    document.write("10 is less than 100")
}
// Else statements only execute if a condition is false
function Age() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Adult = "Congrats! You've made it to adulthood!";
    }
    else {
        Adult = "You are not quite an adult yet.";
    }
    document.getElementById("Age2").innerHTML = Adult;
}
// Else if statements are executed if the if statement above it is false
function Time() {
    var Time = new Date().getHours();
    var Output;
    if (Time < 12 == Time > 0) {
        Output = "Good morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Output = "Good afternoon!";
    }
    else {
        Output = "Good evening!";
    }
    document.getElementById("Time").innerHTML = Output;
}
// Intentional local function error:
function A() {
    var C = 3;
}
function B() {
    var D = 7;
}
console.log(C + D);
// Outputs in the browser console "C is not defined"