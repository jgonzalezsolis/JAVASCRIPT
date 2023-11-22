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