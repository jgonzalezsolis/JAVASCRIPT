// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


var createCounter = function(n) {
    
    return function() {
        return n++;
        
    };
};

const counter = createCounter(-2)
 counter() // 10
 counter() // 11
 counter() // 12



// Create a function that gives a personalized greeting. 
// This function takes two parameters: name and owner.



function greet (name, owner) {
    if  (name === owner){
        return  "Hello boss"
    }
        return "Hello guest"
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= (fuelLeft * mpg)){
        return true
    }
    return false
    
};