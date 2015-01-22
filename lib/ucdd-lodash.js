/**
 * Gets the first element of `array`.
 *
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
    if (array.length === 0)
        return undefined
    else
        return array[0]
}

/**
 * Gets all but the first element of `array`.
 *
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
function rest(array) {
    
    newArray = []       // create empty array

    if (array.length === 0)
        return newArray     // why are we returning an empty array here and not undefined?
    else if (array.length <= 1)
        return newArray     // only the first element; nothing else to return
    else
    {
        for (var i = 1; i <= array.length-1; i++)
        {
            newArray.push(array[i])     // put all elements past index 0 into new array
        };
    }

    return newArray

    //return "not yet implemented"

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 *
 * @example
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 1
 *
 */
function indexOf(array, value) {
    
    if (array.length === 0)
        return undefined        // if it's an empty array, no index to return
    else
    {
        var i = 0
        while (array[i] != value)
            i++     // increase the value of i by one each time the value at the specific index doesn't match value
    }

    return i        // return that index


/*
function indexOf(array, value) 
{//Create a for loop that will loop through the size of the array
    for (var i = 0; i < array.length; i++) 
    {//I check to see if the values match
        if (array[i] == value) 
            {//at the very first instance the value matches, I return the index
                return i
            };
    };//Otherwise, the value is not found in the array
    return "Value does not exist in array"
    //return "not yet implemented"
}
*/

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
    newArray1 = []      // tried to use newArray again and it used the previous newArray from rest(). Why wasn't it
                        // reinitialized to an empty array?

    if (array.length === 0)
        return newArray1

    for (var i = 0; i <= array.length-1; i++)
    {
        if (array[i] != false && array[i] != null && array[i] != 0 && array[i] != "" && array[i] != undefined && array[i] != NaN)
            newArray1.push(array[i])
    };

    return newArray1


    //return "not yet implemented"
/*
 var array_1 = [];
 for (var i=0; i<array.length ; i++)
 {	index=array[i];
 	if (index!=null && index!= false && index != 0 &&index!= "" && index != undefined && index != NaN) 
		array_1.splice(i,0,array[i])
	}

	return array_1; 
}
*/

/**
 * Gets the value of a specified property from all objects in an array
 *
 *  @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.pluck(users, 'user');
 * // => ['barney', 'fred']
 *
 */
function pluck(array, key) {
    newArray2 = []

    if (array.length === 0)
        return newArray2
    else
    {
        for (var i = 0; i <= array.length-1; i++) {
            var obj = array[i]
            if (obj[key])
                newArray2.push(obj[key]) 
        };
    }

    return newArray2

    //return "not yet implemented"
/*
function pluck(array, key) { 
    var retArr = [];
    array.forEach(function(obj){
        if(obj[key]) {
            retArr.push(obj[key])
        }
    })
    return retArr;
}
*/

/**
 * Creates an array excluding all provided values 
 *
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */
function without(array) {
    // Hint: Read this article about using the "arguments" variable
    // to access all provided values
    //
    // http://www.w3schools.com/js/js_function_parameters.asp
    //
    //

    newArray3 = []
  
    for (var i = 0; i <= array.length-1; i++)
    {
        notEqual = true

        for (var j = 1; j <= arguments.length-1; j++)
        {
            if (array[i] == arguments[j])
                notEqual = false
        };
        
        if (notEqual == true)
            newArray3.push(array[i])
    };

    return newArray3

    //return "not yet implemented"

/*
    //create an empty array to be returned
    var newArray = [];

	for(var j = 0; j < array.length; j++){
		
		var x = array[j];

    	var shouldAdd = true;
    	for(var i = 1; i < arguments.length; i++){
    		if(x == arguments[i]){
    			shouldAdd = false;
    			break;
    		}
    	}

    	if(shouldAdd==true)
    		newArray.push(x);
	};

    return newArray;
}
*/

// Export functions
var lib = {}
lib.first = first
lib.rest = rest
lib.indexOf = indexOf
lib.compact = compact
lib.without = without
lib.pluck = pluck

module.exports = lib
