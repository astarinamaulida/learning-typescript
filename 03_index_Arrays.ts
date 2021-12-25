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

let names: Array<string> = ["Danny", "Samantha"];

let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
let bestBreakfasts: string[] = [
  "fasting",
  "oatmeal",
  "tamago kake gohan",
  "any kind of soup",
];
let bestBooleans: boolean[] = [true, false];

////////// Multi Dimentional Arrays //////////

let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ["baked potato", "mashed potato"],
];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];

////////// Tuples //////////

// In TypeScript, when an array is typed with elements of specific types, it’s called a tuple

let ourTuple: [string, number, string, boolean] = [
  "Is",
  7,
  "our favorite number?",
  false,
];

// The tuple above (ourTuple) contains the elements: 'Is', 7 , 'our favorite number?' , false
// and the tuple has a type of [string, number, string, boolean].
// Tuple types specify both the lengths and the orders of compatible tuples,
// and will cause an error if either of these conditions are not met

let favoriteCoordinates: [number, number, string, number, number, string] = [
  40,
  43.2,
  "N",
  73,
  59.8,
  "W",
];

////////// Array Type Inference //////////

let examAnswers = [true, false, false];
let tup: [number, number, number] = [1, 2, 3];
let concatResult = tup.concat([4, 5, 6]); // concatResult has the value [1,2,3,4,5,6].




////////// REST Parameters //////////

// Similar to assigning types to arrays

function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}
