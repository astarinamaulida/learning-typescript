////////// Type Inferences //////////

// TypeScript expects the data type of the variable to match the type of the value initially assigned to it at declaration.
// TypeScript recognizes JavaScript’s built-in “primitive” data types:  
  // boolean
  // number
  // null
  // string
  // undefined

let aged = true;
let realAge = 0; //the type is number, so it has to be number

if (aged) {
  realAge = 4;
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);


////////// Type Shapes //////////

// An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.
let firstName = 'muriel!';

console.log(firstName.toUpperCase());

console.log(firstName.length);


