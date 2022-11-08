let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const num3 = someNumbers.some(function (number) {
	return number % 3 === 0;
});

const num5 = someNumbers.some(function (x) {
	return x % 5 === 0;
});

const num60 = someNumbers.some(function (x) {
	return x % 60 === 0;
});

const num90 = someNumbers.some(function (x) {
	return x % 90 === 0;
});

console.log(num3, num5, num60, num90);
