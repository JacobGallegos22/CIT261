// Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays

// Loops
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

while (true) {
  console.log('Hello, world!');
}

markLoop:
  while (theMark == true) {
    doSomething();
  }

// for (variable of object)

function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}

let object = {
  name: "Jose",
  occupation: "Developer"
};

for (person of object) {
  console.log(person.name);
}


//   statement

var x, y, z;    // Statement 1

// Each statement ends with a semi colin




// Conditional Statement

function testNum(a) {
  if (a > 100) {
    return "positive";
  } else if (a > 0) {
    return "A Lot"
  } else {
    return "NOT positive";
  }
}

switch ('expression') {
  case 'hello':
    console.log('hello');
    break;
  case 'expression':
    console.log('expression');

  default:
    console.log('default');
}

// Functions

const addition = thisIsAFunction(2,2);

function thisIsAFunction(a,b) {
  console.log('Printing a function');
  let sum = a + b;
  return sum;
}

// Variables
var string1 = "This is a string";
var number = 4;
var float = 4.5;

string1 = 4;

const stringVariable = 'This cannot change';
let stringVariable1 = 'This can change';
stringVariable1 = 'yes it can';

//Parameters

//Arrays
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
cars.push("Subaru");

//Associative Arrays

var classmates = {"Kyle" : 1, "Jacob" : 2, "Emma": 3};

console.log(classmates["Kyle"]);

