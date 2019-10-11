// Setting up an Object

let person  = {
  firstName: "Jacob", // These are properties
  lastName: "Gallegos",
  age: "23",
  birthday: "04/18/1996",
  fullName: () => {
    console.log(person.firstName + " " + person.lastName)
  }
};

person.fullName(); // This will call the method

// Inherited Properties

const object1 = {}; // You can define an object like this
object1.property1 = 42; // this is how you set the properties

console.log (object1.hasOwnProperty('property1'));

/**
 * Data Properties has four values
 * Value
 * Writable
 * Enumerable
 * Configurable
 * **/

// Setting constructors and instantiation

function Car(name, maker) {
  this.name = name;
  this.maker = maker;

}

let myCar = new Car('Impreza', 'Subaru');

console.log("I Drive a " + myCar.name + ", " + myCar.maker);



