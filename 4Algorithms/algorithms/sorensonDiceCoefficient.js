/*
  A JavaScript module which returns the Sørensen–Dice coefficient between two input strings.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Dice's coefficient - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Dice%27s_coefficient#Javascript.
*/
module.exports = exports = function(s1, s2) {
	// complete the function
	var intersection = 0;
	var length1 = s1.length - 1;
	var length2 = s2.length - 1;
	
	if(length1 < 1 || length2 < 1)
		return 0;
	
	var bigrams2 = [];
	for(var i = 0; i < length2; i++) {
		bigrams2.push(s2.substr(i,2));
	}

	for(var i = 0; i < length1; i++) {
		var bigram1 = s1.substr(i, 2);
		for(var j = 0; j < length2; j++) {
			if(bigram1 == bigrams2[j]) {
			    intersection++;
			    bigrams2[j] = null;
			    break;
			}
		}
	} 
	return (2.0 * intersection) / (length1 + length2);
};
