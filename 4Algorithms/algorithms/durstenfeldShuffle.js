/*
  A JavaScript module which performs a Durstenfeld shuffle on a given array.
*/
module.exports = exports = function(input) {
	// complete the function
	var random = input.map(Math.random);
  	input.sort(function(a, b) {
    	return random[input.indexOf(a)] - random[input.indexOf(b)];
  	});
  	return input;
}
