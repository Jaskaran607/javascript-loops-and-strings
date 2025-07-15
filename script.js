
    const outputDiv = document.getElementById('output');

    // Array of strings
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

    // Using FOR loop
    outputDiv.innerHTML += "<h3>Using FOR Loop:</h3>";
    for(let i = 0; i < fruits.length; i++) {
      outputDiv.innerHTML += fruits[i] + " (length: " + fruits[i].length + ")<br>";
    }

    // Using WHILE loop
    outputDiv.innerHTML += "<h3>Using WHILE Loop:</h3>";
    let j = 0;
    while(j < fruits.length) {
      outputDiv.innerHTML += fruits[j].toUpperCase() + "<br>";
      j++;
    }

    // Using DO...WHILE loop
    outputDiv.innerHTML += "<h3>Using DO...WHILE Loop:</h3>";
    let k = 0;
    do {
      outputDiv.innerHTML += "Fruit Name: " + fruits[k] + "<br>";
      k++;
    } while(k < fruits.length);

    // Using FOR...OF loop
    outputDiv.innerHTML += "<h3>Using FOR...OF Loop:</h3>";
    for(const fruit of fruits) {
      outputDiv.innerHTML += fruit + " has " + fruit.length + " letters.<br>";
    }

    // Using forEach Loop
    outputDiv.innerHTML += "<h3>Using forEach Loop:</h3>";
    fruits.forEach(function(fruit, index) {
      outputDiv.innerHTML += "Fruit " + (index+1) + ": " + fruit + "<br>";
    });


