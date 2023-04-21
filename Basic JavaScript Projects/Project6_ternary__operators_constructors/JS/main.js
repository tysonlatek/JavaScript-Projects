// Ternary operators "?" operates on three values. EX:
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not of age":"You are of age";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
// The "this" keyword essentially allows you to create a placeholder for undetermined values EX: this.Vehicle_Make → Erik.Vehicle_Make
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// The "new" keyword creates a new object
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
// Example of a constructor function
function Shape(Size, Color, Shape) {
    this.Shape_Size = Size;
    this.Shape_Color = Color;
    this.Shape_Shape = Shape;
}

var John = new Shape("medium", "blue", "square");
var Jane = new Shape("large", "red", "circle");
var Josh = new Shape("small", "orange", "triangle");
function shapeFunction() {
    document.getElementById("New_and_This").innerHTML = "John's favorite shape is a " + John.Shape_Size + "-sized " + John.Shape_Color + " " + John.Shape_Shape;
}

function Person(First, Last, Age) {
    this.Person_First = First;
    this.Person_Last = Last;
    this.Person_Age = Age;
}

function Decrement() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var start = 8;
        function Decrease() {start -= 1;}
        Decrease();
        return start;
    }
}