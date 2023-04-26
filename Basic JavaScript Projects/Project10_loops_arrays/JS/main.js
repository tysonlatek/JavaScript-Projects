// Creates a while loop that counts up to five
function Call_Loop() {
    var Digit = "";
    var Plus = 1;
    while (Plus < 6) {
        Digit += "<br>" + Plus;
        Plus++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// The JavaScript string length property returns the length of a string
let X = "Hello!";
let Y = X.length;
document.getElementById("string_length").innerHTML = Y;
// For loops are used for repeating code a specific number of times
var Fruits = ["Apple", "Orange", "Pear", "Kiwi"];
var Content = "";
var A;
function for_Loop() {
    for (A = 0; A < Fruits.length; A++) {
        Content += Fruits[A] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Content;
}
// An array is a collection of data starting at an index of 0
function array_Function() {
    var Groceries = [];
    Groceries[0] = "eggs"
    Groceries[1] = "milk"
    Groceries[2] = "bread"
    document.getElementById("Array").innerHTML = "The third item on the grocery list is " + Groceries[2];
}

// A token is a single component in a programming language. There are five categories: constants, identifiers, operators, seperators (delimiters), and reserved words

// Constants can not be changed by the program
const E = {size:"small", color:"blue", shape:"circle", feel:"soft"};
function constant_function() {
    document.getElementById("Constant").innerHTML = "The " + E.shape + " feels " + E.feel;
}
// let declares variables that have block scope 
let F = 12;
document.getElementById("F").innerHTML = F;
// The JavaScript return statement stops the execution of a function and returns a value
document.getElementById("Return").innerHTML = return_Function("Amy");
function return_Function(Name) {
    return "Hello " + Name;
}
// Objects are a data structure uses to store different type of data
let Shape = {
    Size: "medium ",
    Color: "blue ",
    Shape: "square",
    shape_Function() {
        return "The shape of the day is a " + this.Size + this.Color + this.Shape;
    }
};
document.getElementById("Shape").innerHTML = Shape.shape_Function();
// The JavaScript break statement stops a loop
let text = "";
for (let i = 0; i < 10; i++) {
    if (i == 4) {break;}
    text += i + "<br>";
}
document.getElementById("Break").innerHTML = text;
// The JavaScript continue statement skips one iteration in a loop
let a = "";
for (let b = 0; b < 11; b++) {
    if (b == 5) {continue;}
    a += b + "<br>";
}
document.getElementById("Continue").innerHTML = a;