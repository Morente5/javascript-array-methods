/* Write examples with Arrays to solve the next problems
using only Array methods (like iterators, etc...):
*/

numArr = [1, 6, 2, 9, 4];
fruitArr = ["Apple", "Banana", "Pumpkin", "Orange", "Cucumber", "Blueberry"];

// a) find largest number
max = numArr.slice().sort()[numArr.length - 1];
console.log(max);

//b) find longest string
longest = fruitArr.sort(function (a, b) {
	return b.length - a.length;
})[0];
console.log(longest);

//c) find even numbers
function isEven(n) {return n % 2 === 0;}

even = numArr.filter(isEven);
console.log(even);

//d) find odd numbers
function isOdd(n) {return !isEven(n);}

odd = numArr.filter(isOdd);
console.log(odd);

//e) find words that contain 'um'
contain_is = fruitArr.filter(function(value) {return value.includes("um");});
console.log(contain_is);

//f) assert all numbers are divisible by three

divisibleBy3 = numArr.filter(function(n) {return n % 3 === 0;});
console.log(divisibleBy3);

//g)  zip two arrays together
fruitArr2 = ["Lemon","Pineapple"];
zippedArr = fruitArr.concat(fruitArr2);
console.log(zippedArr);

//h) sort joined array from smallest to largest
sortedArr = zippedArr.sort(function (a, b) {
	return a.length - b.length;
});
console.log(sortedArr);

//i) remove the first word in the array
sortedArr.shift();
console.log(sortedArr);

//j) place a new word at the start of the array
sortedArr.unshift("Strawberry");
console.log(sortedArr);

//k) replace some elements
sortedArr[3] = "Lime";
sortedArr[sortedArr.length - 1] = "Grape";
console.log(sortedArr);

/*l) Over an array with names, find all entries whose
firstname starts with 'J',  create projection combined
of only the initials of the name and then sort alphabetically
*/
function nameInitial(name) {
	var shortenName = name.split(" ");
	return shortenName[0][0] + '. ' + shortenName[1];
}

function startsWithJ(string) {
	return string.startsWith("J");
}

nameArr = ["Alex Morente", "Javier Rodriguez", "Pepe Benitez", "Jose Gonzalez"];
namesJ = nameArr.map(nameInitial).filter(startsWithJ).sort();
console.log(namesJ);
