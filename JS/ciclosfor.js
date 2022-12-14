const readline = require('readline-sync');

function scanf(type, question) {
	var ret = readline.question(`${question}`);

	switch (type) {
		case "%i":
			ret = parseInt(ret);
			break;
		case "%f":
			ret = parseFloat(ret);
			break;
		case "%s":
			ret = ret;
			break
		case "%c":
			ret = ret[0];
	}

	return ret;
}