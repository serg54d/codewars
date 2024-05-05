function squareSum(numbers) {
	return console.log(numbers.reduce((acc, el) => acc + el * el, 0));
}


squareSum([1, 2])

// let a = [1, 2, 3, 4, 5];
// let res = a.reduce((acc, el) => {
// 	console.log('acc', acc);
// 	return acc + el
// }, 0)

// console.log('res: ', res);