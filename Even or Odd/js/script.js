// Create a function that takes an integer as an argument and returns "Even" for even numberbers or "Odd" for odd numberbers.

function evenOrOdd(number) {
	if (isNaN(number)) return;
	if (number % 2 == 0) {
		return "Even"

	} else {
		return "Odd"
	}
}