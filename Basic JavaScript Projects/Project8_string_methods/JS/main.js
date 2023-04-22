// Concatenation connects two things together
function Concatenate() {
    var P1 = "Hello there! ";
    var P2 = "It's a nice day today! ";
    var P3 = "How are you doing?";
    var WS = P1.concat(P2, P3);
    document.getElementById("Concat").innerHTML = WS;
}
// The slice method cuts out part of a string and makes it into a new string
function Slice() {
    var String = "Hey! What's up?";
    var Section = String.slice(0,4);
    document.getElementById("Slice").innerHTML = Section;
}
// The toUpperCase() method coverts a string to uppercase letters
let A = "Hello, World!";
let B = A.toUpperCase();
document.write(B);
// The search() method searches a string for a value and returns the index of the first match
let C = A.search("World")
document.write("<br>" + C)
// The toString() method returns a number as a string
function string_Method() {
    var D = 100;
    document.getElementById("Numbers_to_string").innerHTML = D.toString();
}
// The toPrecision() method formats a number to a specified length
function precision_Method() {
    var E = 12.34567890;
    document.getElementById("Precision").innerHTML = E.toPrecision(3);
}
// The toFixed method rounds a number to a specified number of decimals and converts it into a string
let F = 5.87;
let G = F.toFixed(10);
document.write("<br>" + G);
// The valueOf() method returns the primitive value of a string. Primitive values are data types that cannot be simplified any futher i.e. strings, numbers, boolean, null, udefined, symbol, and bigint
let H = "Hi!";
let I = H.valueOf()
document.write("<br>" + I)