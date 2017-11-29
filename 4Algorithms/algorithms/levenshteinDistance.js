/*
  A JavaScript module which returns the Levenshtein distance between two input strings.  Also known as the edit distance, the minimum number of substitutions, additions, and/or deletions to change one input string into the other.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Levenshtein Distance - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript.
*/
module.exports = exports = function(s1, s2) {
// complete the function

	if(s1.length == 0) return s2.length; 
	if(s2.length == 0) return s1.length; 

	var matrix = [];

	// increment along the first column of each row
	var i;
	for(i = 0; i <= s2.length; i++){
		matrix[i] = [i];
	}

	// increment each column in the first row
	var j;
	for(j = 0; j <= s1.length; j++){
		matrix[0][j] = j;
	}

	// Fill in the rest of the matrix
	for(i = 1; i <= s2.length; i++){
	for(j = 1; j <= s1.length; j++){
	  if(s2.charAt(i-1) == s1.charAt(j-1)){
	    matrix[i][j] = matrix[i-1][j-1];
	  } else {
	    matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
	                            Math.min(matrix[i][j-1] + 1, // insertion
	                                     matrix[i-1][j] + 1)); // deletion
	  }
	}
	}

	return matrix[s2.length][s1.length];
};
