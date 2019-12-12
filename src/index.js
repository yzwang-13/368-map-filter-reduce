import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Loop through the array.Create a new array by doing something with each item in an array.
const mapNumbers = numbers.map(ele => {
  return ele ** 2;
});
console.log(mapNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(ele => {
  return ele > 30;
});
console.log(filterNumbers);
//Reduce - Accumulate a value by doing something to each item in an array.

const reduceNumber = numbers.reduce((accumulator, ele) => {
  return accumulator + ele;
});
console.log(reduceNumber);

//Find - find the first item that matches from an array.
const findNumber = numbers.find(ele => {
  return ele > 10;
});
console.log(findNumber);

//FindIndex - find the index of the first item that matches.
const findIndexNumber = numbers.findIndex(ele => {
  return ele > 10;
});
console.log(findIndexNumber);

// Challenge: Get only 100-length string from meaning of emojipedia

const result = emojipedia.map(ele => {
  return ele.meaning.substring(0, 100);
});
console.log(result);
