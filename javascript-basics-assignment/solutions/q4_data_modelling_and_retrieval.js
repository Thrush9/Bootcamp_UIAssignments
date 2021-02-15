// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

// Write your code here

const fruits = [
  { name: "Apple", color: "red", pricePerKg: 180 },
  { name: "Orange", color: "orange", pricePerKg: 100 },
  { name: "Banana", color: "yellow", pricePerKg: 40 },
  { name: "Mango", color: "yello", pricePerKg: 70 },
  { name: "Grapes", color: "green", pricePerKg: 120 },
];

const convert2obj = (fruitArray1, keyField) => {
  // Write your code here
  let search = fruitArray1
    .filter((fruit, item) => fruit.name == keyField)
    .reduce((obj, item) => {  obj[keyField] = item; return obj; }, {});
  return search;
};
const fruitObj = convert2obj(fruitArray, "Apple");

console.log(fruitObj);
