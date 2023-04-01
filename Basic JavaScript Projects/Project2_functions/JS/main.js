function Greeting() {
    // Variable A is created and then concatenated
    var A = "Hello, "
    A += "World!"
    // When the button is pressed "Hello, World!" is displayed on the screen
    document.getElementById("Greeting_Text").innerHTML = A;
}