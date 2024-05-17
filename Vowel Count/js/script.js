// Возвращает количество гласных в заданной строке.
// Мы будем считать a, e, i, oгласными uдля этой Ката(но не y).
// Входная строка будет состоять только из строчных букв и / или пробелов.



function getCount(str) {
	let counter = 0
	str.split('').map(el => el === 'a' | el === 'e' | el === 'i'
		| el === 'o' | el === 'u' ? counter++ : counter)
	return counter;
}

getCount('Sergeyu')