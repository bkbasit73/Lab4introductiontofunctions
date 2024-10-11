function greet(name) {
    return "Hello, " + name + "!";
}


console.log(greet("Milton")); 

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 10)); 

let x = 10;

function changeValue() {
    let x = 20; 
    console.log("Inside function, x = " + x); 
}

console.log("Before calling function, x = " + x);
changeValue();
console.log("After calling function, x = " + x); 


function greet(name = "there") {
    return "Hello, " + name + "!";
}

console.log(greet()); 
console.log(greet("Milton")); 

function decrementFunction() {
    let count = 5;
    return function() {
        count--; 
        console.log("Count: " + count);
    }
}

const decrementCounter = decrementFunction();
decrementCounter();
decrementCounter();
decrementCounter(); 


