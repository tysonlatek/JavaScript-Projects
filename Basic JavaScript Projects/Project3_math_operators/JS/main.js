function Add() {
    var A = 2 + 3;
    // When the body is loaded variable A's value is calculated and the sum is printed on the screen
    document.getElementById("Math").innerHTML = "2 + 3 = " + A;
}

function Subtract() {
    var B = 5 - 7;
    // When the button is pressed variable B's value is calculated and the difference is printed on the screen
    document.getElementById("Difference").innerHTML = B;
}

function Multiply() {
    var C = 10 * 12;
    // When the button is pressed variable C's value is calulated and the product is printed on the screen
    document.getElementById("Product").innerHTML = C;
}

function Divide() {
    var D = 15 / 18;
    // When the button is pressed variable D's value is calulated and the quotient is printed on the screen
    document.getElementById("Quotient").innerHTML = D;
}

function MultiOp() {
    var E = (2 + 3) - 5 * 7 / 10;
    // When the button is pressed variable E's value is calulated and the solution is printed on the screen
    document.getElementById("Solution").innerHTML = E;
}

function Modulus() {
    var F = 20 % 12;
    // When the button is pressed variable F's value is calulated and the solution is printed on the screen
    document.getElementById("Remainder").innerHTML = F;
}

function Negation() {
    var G = 30;
    // When the button is pressed variable G's value is inverted and then the result is printed on the screen
    document.getElementById("Inversion").innerHTML = -G;
}

var H = 9;
H ++; // Increments variable H by one
document.write(H);

var I = 25.5;
I --; // Decrements variable I by one
document.write(" " + I);

// Returns a random number between 0 and 50
window.alert(Math.random() * 50);

// Return the number within the parentheses rounded down
window.alert(Math.floor(100.9));