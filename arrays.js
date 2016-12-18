var chocolateBars = ['snickers', 'hundred grands', 'kit kat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  var array = [1]; 
  array.unshift('foo')
  return array 
}
addElementToBeginningOfArray(); 

function destructivelyAddElementToBeginningOfArray (array, element){
  var array = [1];
  ["foo", ...array]
  return array 
}
destructivelyAddElementToBeginningOfArray(); 

function addElementToEndOfArray (array, element){
  var array = [1]; 
  array.push('foo')
  return array 
}
addElementToEndOfArray(); 

function destructivelyAddElementToEndOfArray (array, element){
  var array = [1];
  [ ...array, "foo"]
  return array 
}
destructivelyAddElementToEndOfArray(); 

function accessElementInArray (array, index){
  var array = [1]; 
  return  array[2]; 
}
accessElementInArray();  

function destructivelyRemoveElementFromBeginningOfArray (array){
  var array = [1, "foo"]; 
array.shift()
return array 
}
destructivelyRemoveElementFromBeginningOfArray(); 

