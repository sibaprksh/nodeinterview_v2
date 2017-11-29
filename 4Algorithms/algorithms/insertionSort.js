/*
  A JavaScript module which performs an insertion sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
	// complete the function
	var len = input.length;
    for (var i = 1; i < len; i++) {
        var tmp = input[i]; //Copy of the current element. 
        /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
        for (var j = i - 1; j >= 0 && (input[j] > tmp); j--) {
            //Shift the number
            input[j + 1] = input[j];
        }
        //Insert the copied number at the correct position
        //in sorted part. 
        input[j + 1] = tmp;
    }
    return input;
};
