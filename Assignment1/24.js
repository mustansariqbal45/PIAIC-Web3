var sName = 'Mustansar';
var age = 25;
var fruits = ['apple', 'banana', 'orange'];
var numberList = [1, 2, 3, 4, 5];
console.log("Tests for equality and inequality with strings:");
console.log(sName == 'Mustansar'); // True
console.log(sName != 'Mustansar'); // False
console.log(sName == 'mustansar'); // False
console.log(sName != 'mustansar'); // True
console.log("Tests using the lowercase function:");
console.log(sName.toLowerCase() == 'mustansar'); // True
console.log(sName.toLowerCase() != 'mustansar'); // False
console.log("Numerical tests:");
console.log(age == 25); // True
console.log(age != 25); // False
console.log(age > 30); // False
console.log(age < 30); // True
console.log(age >= 25); // True
console.log(age <= 25); // True
console.log("Tests using 'and' and 'or' operators:");
console.log(sName == 'Mustansar' && age == 25); // True
console.log(sName == 'Mustansar' || age == 30); // True
// console.log("Test whether an item is in an array:");
// console.log(fruits.includes('banana')); // True
// console.log(fruits.includes('grape')); // False
// console.log("Test whether an item is not in an array:");
// console.log(!fruits.includes('mango')); // True
// console.log(!fruits.includes('apple')); // False
console.log("Additional numerical tests:");
console.log(numberList.indexOf(3) >= 0); // True
console.log(numberList.indexOf(10) >= 0); // False
