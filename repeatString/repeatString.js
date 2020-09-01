const repeatString = function(string, n) {
	let out = '';
	if (n < 0) return 'ERROR';
	for (let i = 0; i < n; i++){
		out += string;
	}
	return out;
}

module.exports = repeatString
