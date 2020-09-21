const items = [
  { name: "Bike", price: 100 },
  { name: "Motorcycle", price: 500 },
  { name: "Car", price: 300 },
  { name: "Book", price: 5 },
  { name: "Keyboard", price: 45 },
];

const number = [1, 2, 3, 4, 5];

// Filter Items
const filterItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filterItems);

// Map
const itemsName = items.map((el) => {
  return el.name;
});

const itemsPrice = items.map((el) => {
  return (el.price += 1);
});

console.log(itemsName);
console.log(itemsPrice);

// Reduce
const TotalPrice = items
  .map((el) => el.price)
  .reduce((previousPrice, currentPrice) => previousPrice + currentPrice);

console.log(TotalPrice);

// Different way to use reduce
const total = items.reduce((currentPrice, item) => {
  return item.price + currentPrice;
}, 0);

console.log(total);

// Found
const itemsFound = items.find((el) => {
  return el.name === "Motorcycle";
});

console.log(itemsFound);

// For Each
items.forEach((item) => console.log(item.name));

// Some Method, return boolean value => True or False
// If the return value exists and match with the condition we make in the array, it will return true value
// Vice versa
const ExpensiveItems = items.some((item) => {
  return item.price > 300;
});

console.log(ExpensiveItems);

// Every Method, return boolean value => True or False
// But every will check every item inside array
// if all item inside array match with the condition that we make, it will return true
// But if there is one item did not match with the condition we make, it will return false
const AllExpensiveItems = items.every((item) => {
  return item.price >= 300;
});

console.log(AllExpensiveItems);

// Include Method, return boolean value => True or False

const ThereIsTwo = number.includes(2);

console.log(ThereIsTwo);
