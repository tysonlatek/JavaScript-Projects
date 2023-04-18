// Tells what data type a variable is
document.write(typeof 15);
// Example of type coercion converting a string into a number
document.write(Number("5") + 5)
// NaN: Not a Number; is used to tell if a value is a number or not
// isNan: outputs "true" or "false" depending on if the value is a number or not
function Not_a_Num() {
    document.getElementById("NaN Test").innerHTML = 0 / 0;
}

function Not_a_Num2() {
    document.getElementById("NaN Test2").innerHTML = isNaN("Hello!");
}

function Not_a_Num3() {
    document.getElementById("NaN Test3").innerHTML = isNaN("8");
}
// Outputs "Infinity" since it is a value larger than JavaScripts maximum floating point number
function Beyond() {
    document.getElementById("Beyond Test").innerHTML = 2E310;
}
// Outputs "-Infinity" since it is a value lower than JavaScripts minimum floating point number
function Below() {
    document.getElementById("Below Test").innerHTML = -3E310;
}
// Outputs "true" using Boolean logic
document.write(15 > 5);
// Outputs "false" using Boolean logic
document.write(90 < 90);
// Outputs the result in the browser's console
console.log(3 + 2);
// Outputs "false" using Boolean logic in the console
console.log(1 > 2);
// Outputs "true" using Boolean logic
document.write(1 == 1);
// Outputs "false" using Boolean logic
document.write(1 == 2);

// "===" is used to check whether the data on each side is both equal and the same data type using Boolean logic

// Outputs "true":
a = 1;
b = 1;
document.write(a === b);

// Outputs "false":
c = 1;
d = "2";
document.write(c === d);

e = 1;
f = "1";
document.write(e === f);

g = "1";
h = "2";
document.write(g === h);

// Boolean logic operators are written in Javascript as: and (&&), or (||), not (!)

// Outputs "true":
document.write(1 < 2 && 4 > 3);
document.write(1 < 2 || 2 < 1);

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(1 > 2);
}

// Outputs "false":
document.write(1 < 2 && 3 > 3);
document.write(2 < 2 || 4 > 4);

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(1 < 2);
}