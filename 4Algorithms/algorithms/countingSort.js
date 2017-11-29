/*
  A JavaScript module which performs a counting sort on a given array of numbers, ordering the elements from lowest to highest.
*/
'use strict';
module.exports = function(array) {
	// complete the function
	array.sort(function(a, b) {
	  return a - b;
	});
	return array;
};
