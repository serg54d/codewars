// Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.
// Например, строка «Этот сайт для неудачников LOL!» станет «Ths wbst s fr lsrs LL!».

// Примечание: для этой ката yне считается гласной.




function disemvowel(str) {
	let letterFiltering = ['a', 'e', 'i', 'o', 'u']
	let result = str.split('').filter(el => !letterFiltering.includes(el.toLowerCase())).join('')
	return result;
}

disemvowel('This website is for losers LOL!')



