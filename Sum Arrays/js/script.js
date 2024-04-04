// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вам следует вернуть 0.

// Примеры
// Ввод, [1, 5.2, 4, 0, -1]
// вывод: 9.2

let numbers = [1, 5.2, 4, 0, -1]


function sum(numbers) {
	let summary = 0
	"use strict";
	if (numbers.length > 1) {
		numbers.forEach(element => {
			summary += element

		});
		return console.log(summary)
	} else if (numbers.length == 1) {
		numbers.forEach(element => {
			numbers = element

		});
		return console.log(numbers)
	} else {
		return console.log(0)
	}
	// for (var i = 0; i < numbers.length; i++) {
	// 	summary += numbers[i];
	// }
	// return console.log(summary);
};

sum(numbers)
