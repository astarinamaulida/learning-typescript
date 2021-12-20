////////// Parameter Type Annotations //////////

// Function parameters may be given type annotations with the same syntax as variable declarations: 
// a colon next to the name

function triple(value:number) {
  return value * 3;
}

function greetTripled(greeting:string, value:number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Hiya', 5);


////////// Optional Parameters //////////

// To indicate that a parameter is intentionally optional, we add a ? after its name. 
// This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.

function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');


////////// Default Parameters //////////

// If a parameter is assigned a default value, 
// TypeScript will infer the variable type to be the same as the default value’s type.

function myproclaim(status = "not ready...", repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

myproclaim();
myproclaim("ready?");
myproclaim("ready!", 3);


////////// Inferring Return Types //////////

// TypeScript can also infer the types of values returned by functions. 
// It does this by looking at the types of the values after a function’s return statements.

function getRandomNumber(){
  return Math.random();
}

const myVar = getRandomNumber();

function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
 
const liquidAmount = ouncesToCups(3);


////////// Explicit Return Types //////////

// Add an explicit type annotation after its closing parenthesis

function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};


////////// Void Return Type //////////

// There is no returned value, so we must treat the return type as void.

function makeFruitSalad(fruit1:string, fruit2:string):void{
  let salad=fruit1+fruit2+fruit2+fruit1+fruit2+fruit1+fruit1;
  console.log(salad);
}

makeFruitSalad('banana','pineapple');