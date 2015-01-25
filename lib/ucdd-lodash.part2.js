/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end)
{
    newArray = []

    if (start == 0 && end != null)
    {
    	return newArray
    }
    else if (end == null)
    {
    	for (var i = 0; i < start; i++)
    	{
    		newArray.push(i)
    	};
    }
    else
    {
    	for (var i = start; i < end; i++)
    	{
    		newArray.push(i)
    	};
    }

    return newArray

    //return "not yet implemented"
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
    var newObject = {}

    if (propertyNames == null)
    {
    	return newObject
    }
    else
    {
    	for (var i = 0; i < propertyNames.length; i++)
    	{
    		for (key in object)
    		{
    			if (key == propertyNames[i])
    			{
    				newObject[key] = object[key]
    			}
    		}
    	}
    }

    return newObject 

    //return "not yet implemented"
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {

    for (var i = 0; i < collection.length; i ++)
    {
    	if (predicate(collection[i]))
    	{
    		return true
    	}
    }

    return false

    //return "not yet implemented"
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    
    for (var i = 0; i < collection.length; i++)
    {
    	if (!predicate(collection[i]))
    	{
    		return false
    	}
    }

    return true

    //return "not yet implemented"
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
	var newObject = {}
	var countCollec = 0
    for (var i = 0; i < collection.length; i++)
    {
   		var countObject = 0
   		for (key1 in object)
   		{
   			countObject++
   			for (key2 in collection[i])
   			{
   				if (key1 == key2)
   				{
   					if (object[key1] == collection[i][key2])
   					{
   						countCollec++
   					}
   				}
   			}
   		}

   		if (countObject == countCollec)
   		{
   			newObject = collection[i]
   		}
   		else
   		{
   			countCollec = 0
   		}
    }

    return newObject

    //return "not yet implemented"
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib