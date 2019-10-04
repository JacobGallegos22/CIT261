// Define a JSON String

let jsonStr = '{"firstName": "Jacob", "lastName":"Gallegos"}';

const jsonObject = JSON.parse(jsonStr); // This will turn the JSON str into a javascript object

console.log(jsonObject.firstName); // Prints out Jacob

// JSON dates are not allowed

// Let's convert out json object back into a string

let newJsonStr = JSON.stringify(jsonObject);

console.log(newJsonStr); // Prints the object as a JSON string