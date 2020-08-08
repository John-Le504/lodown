'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Designed to take a value and returns a value unchanged.
 * 
 * @param {*} value: single value that can be any datatype.
 * 
 * @return {*} : returns the value unchanged.
 */
 
 function identity(value){
 //return value unchanged
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Designs to take a value and return a string that reveals the value's type.
 * 
 * @param {*} anything: single value that can be any datatype.
 * 
 * @return {string} : returns the string that reveals the type of the value.
 */
 
 function typeOf(value){
    
    if (value === null){ //checks if value is null
        return "null";
    }
    if (value instanceof Date){ //checks if value is an instanceof Date
        return "date";
    }
    if (typeof value === "string"){ //checks if value is a string
        return "string";
    }
    if (typeof value === "boolean"){ //checks if value is a boolean
        return "boolean";
    }
    if (typeof value === "number"){ //checks if value is a number
        return "number";
    }
    if (Array.isArray(value)){ //checks if value is an array
        return "array";
    }
    if (typeof value === "object"){ //checks if value is an object
        return "object";
    }
    if (typeof value === "function"){ //checks if value is an function
        return "function";
    }
    if (typeof value === "undefined"){ //checks if value is undefined
        return "undefined";
    }
 }
 module.exports.typeOf = typeOf;
 
 
 /**
  * first: Designed to take an array and a number, and returns the first value(s)
  * in the array that correlates to the number argument. Will return 
  * empty array if array argument wasn't an array. Will return
  * first first value in array if number argument wasn't a number.
  * Will return empty array if number is negative. Will return entire
  * array if number argument is greater than the length of the array
  * argument.
  * 
  * @param {array} array: the array over which to iterate.
  * @param {number} number: the number of values in the array to return
  * 
  * @return {array, string, or number}: returns the first value(s) in the array
  * correlating to the number argument. Will return empty array if
  * array argument wasn't an array. Will return first value in array
  * if number argument wasn't a number. Will return empty array if 
  * number is negative. Will return entire array if number argument
  * is greater than the length of the array argument.
  */
  
  function first(array, number){
      //if array is an array
    if (Array.isArray(array)){
        //if number is a number
        if(typeof number === "number"){
            //if number is positive
            if(number > 0){
                //if number is less than array length
                if(number < array.length){
                    //create resultArr empty array
                    let resultArr = [];
                    //loop through array using number to stop loop
                    for(let i = 0; i < number; i++){
                        //push values into resultArr
                        resultArr.push(array[i]);
                    }
                    //return resultArr
                    return resultArr;
                }    
                //if number is greater than array length,return whole array
                else return array;
            }    
            //if not a positive number,return empty array
            else return [];
        }
        //if not a number,return the first value in array
        else return array[0];
    }
    //if not array,return empty array
    else return [];
  }
  module.exports.first = first;
  
  
 /**
  * last: Designed to take an array and a number, and returns the last value(s)
  * in the array that correlates to the number argument. Will return 
  * empty array if array argument wasn't an array. Will return
  * last value in array if number argument wasn't a number.
  * Will return empty array if number is negative. Will return entire
  * array if number argument is greater than the length of the array
  * argument.
  * 
  * @param {array} array: the array over which to iterate.
  * @param {number} number: the number of values in the array to return
  * 
  * @return {array, string, or number}: returns the last value(s) 
  * in the array correlating to the number argument. Will return empty 
  * array if array argument wasn't an array. Will return last value 
  * in array if number argument wasn't a number. Will return empty 
  * array if number is negative. Will return entire array if number 
  * argument is greater than the length of the array argument.
  */
  
  function last(array, number){
      //if array is an array
    if (Array.isArray(array)){
        //if number is a number
        if(typeof number === "number"){
            //if number is positive
            if(number > 0){
                //if number is less than array length
                if(number < array.length){
                    //create resultArr empty array
                    let resultArr = [];
                    //loop through array backwards
                    for(let i = array.length; i >= 0; i--){
                        //push values into resultArr
                        resultArr.unshift(array[i]);
                        //if last index number of resusltArr is equal to number
                        if(resultArr.length - 1 === number){
                            //pop off last index in resultArr
                            resultArr.pop()
                            //return resultArr
                            return resultArr;
                        }
                    }
                }    
                //if number is greater than array length,return whole array
                else return array;
            }    
            //if not a positive number,return empty array
            else return [];
        }
        //if not a number,return the last value in array
        else return array[array.length - 1];
    }
    //if not array,return empty array
    else return [];
  }
  module.exports.last = last;
  
  
 /**
  * indexOf: Designed to take an array and any value. Loops through array and returns the
  * index of the value within the array. Will return -1 if value isn't found in array
  * 
  * @param {array} array: the array over which to iterate.
  * @param {*} value: single value that can be any datatype. 
  * 
  * @return {number}: returns the index of the value within the array.
  * Will return -1 if value isn't found in array.
  */ 
  
  function indexOf(array, value){
      //loop through array
    for(let i = 0; i < array.length; i++){
        //if value in array equals value
        if(array[i] === value){
            //return index
            return i;
        }
    }
    //return -1 if value isn't found in array
    return -1;
  }
  module.exports.indexOf = indexOf;
  
  
 /**
  * contains: Designed to take an array and any value. Loops through array and returns 
  * true or false whether value is in array.
  * 
  * @param {array} array: the array over which to iterate.
  * @param {*} value: single value that can be any datatype. 
  * 
  * @return {boolean}: returns true or false depending on whether value
  * is in array or not.
  */ 
  
  function contains(array, value){
      let boolean;
  //loop through array
  for(let i = 0; i < array.length; i++){
        //if value of index in array is eqial to value
        if(array[i] === value){
            //assign true to boolean
            boolean = true;
        }
  }
  //return true if boolean is truey or false if boolean is falsey
  return (boolean ? true : false)
  }
  module.exports.contains = contains;
  
  
 /**
  * each: Designed to take a collection and a function, and loops through the
  * collection and uses the function as it loops through each collection.
  * 
  * @param {array or object} collection: The collection over which to
  * iterate.
  * @param {function} action: The function to be applied to each value
  * in the collection.
  */
  
  function each(collection, func){
      //if collection is an array
    if(Array.isArray(collection)){
        //loop through collection
        for(let i = 0; i < collection.length; i++){
            //use function and use arguments in it
            func(collection[i], i, collection);
        }
    }
    //else collection is not an array
    else{
        //loop through object
        for(let key in collection){
            //use function and use arguments in it
            func(collection[key], key, collection);
        }
    }
  }
  module.exports.each = each;
  
  
 /**
  * unique: Designed to take an array, loops through it, and uses the indexOf 
  * function to check if uniqueArr has the element in the array argument. If 
  * indexOf returns -1, the value will be pushed into uniqueArr. Return uniqueArr 
  * after loop is done.
  * 
  * @param {array}: the array over which to iterate.
  *
  * @return {array}: returns an array containing unique values. The array will only  
  * contain values that aren't duplicates.
  */
  
  function unique(array){
      //created empty array uniqueArr
    const uniqueArr = [];
    
    //loop through array
    for(let i = 0; i < array.length; i++){
          //if indexOf returns -1, push the value in the index into empty array
          if(indexOf(uniqueArr,array[i]) === -1){
          //push the value in the index into empty array
          uniqueArr.push(array[i]);
        }
    }
    return uniqueArr; //return uniqueArr
  }
  module.exports.unique = unique;
  
/**
 * filter: Designed to take an array and loops through it, and checks if the function 
 * returns true for each iteration. If the function returns true, the element from the  
 * array will be pushed into an output array.
 * 
 * @param {array}: the array over which to iterate.
 * @param {function}: The function to be applied to each value in the collection.
 * 
 * 
 * @return {array}: Returns an array containing values that passed true in the function
 */
  
  function filter(array, func){
      //creat empty array newArr
    const newArr = [];
    
    //calling each,putting in array, and creating a function that uses the values from each
    each(array,(element, index, collection) => {
      
      //if func in _.each returns true 
      if(func(element, index, collection)){
        //push the value into newArr
        newArr.push(element);
      }
    })
     
    //return newArr
    return newArr;
  }
  module.exports.filter = filter;
  
  /**
   * reject: Designed to take an array and loops through it, and checks if the function 
   * returns false for each iteration. If the function returns false, the element from  
   * the array will be pushed into an output array.
   * 
   * @param {array}: the array over which to iterate.
   * @param {function}: The function to be applied to each value in the collection.
   * 
   * 
   * @return {array}: Returns an array containing values that passed false in the function
   */
  
  function reject(array, func){
      //creat empty array newArr
    const newArr = [];
    
    //calling each,putting in array, and creating a function that uses the values from each
    each(array,(element, index, collection) => {
      
        //if func in _.each returns false 
        if(!func(element, index, collection)){
            //push the value into newArr
            newArr.push(element);
        }
    })
    //return newArr
    return newArr;
  }
  module.exports.reject = reject;
  
  /**
   * partition: Designed to take an array and a function. Loops through the array and tests
   * each value to return either true or false. If the function turns true, it'll push the
   * value into one array, and if the function returns false, it'll push the value into a
   * separate array.
   * 
   * @param {array}: the array over which to iterate.
   * @param {function}: The function to be applied to each value in the collection.
   * 
   * @return {array}: Returns an array containing two arrays within it. One array contains
   * values that made the function return true, and the other array contains values that
   * made the function return false.
   */
   
   function partition(array, func){
       //creat empty array newArr
    const newArr = [[], []];
    
    //calling each,putting in array, and creating a function that uses the values from each
    each(array,(element, index, collection) => {
        //push element into first array in newArr if function returned true
        if(func(element, index, collection)){
            //push element into first array in newArr
            newArr[0].push(element);
        }
        //push into second array in newArr if function returned false
        else newArr[1].push(element);
    })
    //return newArr
    return newArr;
   }
  module.exports.partition = partition;
  
  /**
   * map: Designed to take a collection and a function. Loops through the collection, and
   * uses the function on each value of the collection and transforms it.
   * 
   * @param {array or object} collection: the collection over which to iterate.
   * @param {function}: The function to be applied to each value in the collection.
   * 
   * @return {array}: Returns an array that contains transformed values.
   */
  
  function map(collection, func){
      //creat empty array newArr
    const newArr = [];
    
    //calling each,putting in collection, and creating a function that uses the values from each
    each(collection,(element, index, collection) => {
        //push the value func returns into newArr
        newArr.push(func(element, index, collection));
    })
    //return newArr
    return newArr;
  }
  module.exports.map = map;
  
  /**
   * pluck: Designed to take an array of objects and a property. Loops through the array of
   * objects and extracts an array of the given property.
   * 
   * @param {array}: the array over which to iterate.
   * @param {string} property: The property name to search for.
   * 
   * @return {array}: Returns an array that contains values that relate to the property
   */
  
  function pluck(arrayOfOb, property){
      
       //calling map,and returning a mapped array
    return map(arrayOfOb,(element, index, collection) => {
        //return the property into the array in the map function
        return (element[property]);
    })
    
  }
  module.exports.pluck = pluck;
  
  /**
   * every: Designed to take a collection and a function. Loops through the collection and
   * uses the function on each value to test if it'll return true or false. If every value
   * makes the function return true, the every function will return true. If one value makes
   * the function return false, the every function will return false. If function is not
   * provided or doesn't return a boolean, return true if every element is truthy. Return  
   * false otherwise.
   * 
   * @param {array or object} collection: the collection over which to iterate.
   * @param {function}: The function to be applied to each value in the collection.
   * 
   * @return {boolean}: Returns true if all values return true, but returns false if one value
   * returns false.
   */
  
  function every(collection, func){
      //created counterT and countF and assigned both to 0
    let counterT = 0;
    let counterF = 0;
    
    //if func is a function,run if code block ,else run else code block
    if(typeof func === "function"){
    
        //calling each,putting in collection, and creating a function that uses the values from each
        each(collection,(element, index, collection) => {
            //if func returns true,increment counterT
            if(func(element, index, collection)){
                //increment counterT
                counterT++;
            }
            //if func return false,increment counterF
            else counterF++;
        })
        //if counterF is equal to 0, return true, else false
        if(counterF === 0){
            return true;
        }
        else return false;
    }    
    else {
        //calling each,putting in collection, and creating a function that uses the values from each
        each(collection,(element, index, collection) =>{
            //if element is true,increment counterT
            if(element){
                counterT++;
            }
            //if element is false.increment counterF
            else counterF++;
        })
        //if counterF is equal to 0, return true, else false
        if(counterF === 0){
            return true;
        }
        else return false;    
    }
  }
  module.exports.every = every;
  
  /**
   * some: Designed to take a collection and a function. Loops through the collection and
   * uses the function on each value to test if it'll return true or false. If every value
   * makes the function return false, the some function will return false. If one value makes
   * the function return true, the some function will return true.If function is not
   * provided or doesn't return a boolean, return false if every element is falsy. Return  
   * true otherwise.
   * 
   * @param {array or object} collection: the collection over which to iterate.
   * @param {function}: The function to be applied to each value in the collection.
   * 
   * @return {boolean}: Returns false if all values return false, but returns true if one value
   * returns true.
   */
  
  function some(collection,func){
      //created counterT and countF and assigned both to 0
    let counterT = 0;
    let counterF = 0;
    
    //if func is a function,run if code block ,else run else code block
    if(typeof func === "function"){
    
        //calling each,putting in collection, and creating a function that uses the values from each
        each(collection,(element, index, collection) => {
            //if func returns true,increment counterT
            if(func(element, index, collection)){
                //increment counterT
                counterT++;
            }
            //if func return false,increment counterF
            else counterF++;
        })
        //if counterT greater than 0, return true, else false
        if(counterT > 0){
            return true;
        }
        else return false;
    }    
    else {
        //calling each,putting in collection, and creating a function that uses the values from each
        each(collection,(element, index, collection) =>{
            //if element is true,increment counterT
            if(element){
                counterT++;
            }
            //if element is false.increment counterF
            else counterF++;
        })
        //if counterT greater than 0, return true, else false
        if(counterT > 0){
            return true;
        }
        else return false;    
    }
  }
  module.exports.some = some;
  
  /**
   * reduce: Designed to take an array, function, and seed. Reduces an array to a single value
   * by looping through it and applies a function using seed as the initial value. If seed is
   * not given, use the first value of the array as the initial value.
   * 
   * @param {array}: The array over which to iterate.
   * @param {function}: The function to be applied to each value in the collection.
   * @seed {number}: The number to be applied as the initial value.
   * 
   * @return {number}: Returns a single value that was reduced from the array.
   */
  
  function reduce(array, func, seed){
      
      //Call <function> for every element in <collection>
      each(array, (element, index, collection) =>{
        //if seed isn't undefined, 
        if(seed !== undefined){
            //use seed on the first iteration, and then use the return value as the previous result
            seed = func(seed, element, index);
        }
        else{
            //assign element to seed to make it not undefined
            seed = element;
        }
    })
    //return seed
    return seed;
  } 
  module.exports.reduce = reduce;
  
  /**
   * each: Designed to take a destination object and source object(s). Loops through source
   * object(s) and copies the properties from the source object(s) to the destination object.
   * 
   * @param {object} destination object: The object to receive properties.
   * @param {object} source object: The object to copie properties from.
   * 
   * @return {object} destination object: Returns the destination object with properties from
   * the source objects.
   */
   
   function extend(obj1, newObj){
       
       //loop through object arguments, and apply the callback function
    each(arguments, (newObj) => {
        //loop through object
        for(let key in newObj){
            //assign properties from newobject to object1
            obj1[key] = newObj[key];
        }
    })
    //return object1
    return obj1;
   }
  module.exports.extend = extend;
  