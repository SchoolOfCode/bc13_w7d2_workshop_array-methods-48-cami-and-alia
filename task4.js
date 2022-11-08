let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

const mult7 = sevenTimesTable.every(function (x) {
	return x % 7 === 0;
});

console.log(mult7);

//4b Check if every number in the seventySevenTimesTable array is a multiple of 77 using the .every() method

const mult77 = seventySevenTimesTable.every(function (x) {
	return x % 77 === 0;
});

console.log(mult77);

//4c:  Use the .find() method to identify which number it is.

const rogueNum = seventySevenTimesTable.find(function (x) {
	return x % 77 !== 0;
});

console.log(rogueNum);

//4d. Now that you know which number is incorrect, use the .findIndex() method to identify the index of the number.

const rogueIndex = seventySevenTimesTable.findIndex(function (x) {
	return x === rogueNum;
});

console.log(rogueIndex);
