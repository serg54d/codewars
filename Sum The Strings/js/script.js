function sumStr(a, b) {
	if (a || b) {
		if (a === '') {
			a = '0'
		}
		if (b === '') {
			b = '0'
		}
		result = JSON.parse(a) + JSON.parse(b)
		return console.log(JSON.stringify(result))
	}
	if (b === '' && a === '') {
		a = '0', b = '0'
		result = JSON.parse(a) + JSON.parse(b)
		return console.log(JSON.stringify(result))
	}

	// return console.log(JSON.stringify(result))

}

sumStr("", "")