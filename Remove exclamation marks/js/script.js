// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Input string
let s = 'Geeks!ForGeeks!';

function removeExclamationMarks(s) {
	return s.replace(/!/g, '');
}

console.log(removeExclamationMarks(s));