let customersArray = [
  "Custy Stomer",
  "C. Oostomar",
  "C.U.S. Tomer",
  3432434,
  "Custo Mer",
  "Custopher Ustomer",
  3432435,
  "Kasti Yastimeur",
];

function checkCustomersArray() {
  for (let i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] != "string") {
      console.log(`Type error: ${customersArray[i]} should be a string!`);
    }
  }
}
checkCustomersArray();

function stringPush(val) {
  if (typeof val === "string") {
    customersArray.push(val);
  }
}



////////// Array Type Annotations //////////

// Just put [] after the element type
// An alternative method is to use the Array<T> syntax, where T stands for the type

let names: Array<string> = ['Danny', 'Samantha'];

let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];



////////// Multi Dimentional Arrays //////////

let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][]= [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];



////////// Multi Dimentional Arrays //////////