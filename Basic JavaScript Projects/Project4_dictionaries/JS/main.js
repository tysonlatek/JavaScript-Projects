function favorite_colors() {
    // Creates a dictionary made of key-value pair
    var Color = { 
    John:"Blue",
    Jane:"Violet",
    Joe:"Orange"
    };
    delete Color.Joe; // Deletes an KVP form the dictionary
    document.getElementById("Dictionary").innerHTML = Color.Joe;
}