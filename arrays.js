var chocolateBars = ['snickers', 'hundred grands', 'kit kat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  var array = [1]; 
  array.unshift('foo')
  return array 
}
addElementToBeginningOfArray(); 

function destructivelyAddElementToBeginningOfArray (array, element){
  var array = [1];
  array = ["foo", ...array]
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
  array = [ ...array, "foo"]
  return array 
}
destructivelyAddElementToEndOfArray(); 

function accessElementInArray (array, index){
  var array = [1]; 
  return  array[2]
}
accessElementInArray();  

function destructivelyRemoveElementFromBeginningOfArray (array){
  var array = [1, "foo"]; 
array.shift()
return array 
}
destructivelyRemoveElementFromBeginningOfArray(); 

function removeElementFromBeginningOfArray (array){
  var array = [2, 3];
  array = array.slice(0)
  return array 
}
removeElementFromBeginningOfArray();


function destructivelyRemoveElementFromEndOfArray (array) {
  var array = [2, 3]; 
  array.pop()
  return array 
}
destructivelyRemoveElementFromEndOfArray();

function removeElementFromEndOfArray (array) {
  var array = [1, 2]; 
  array.slice(0, array.length - 1)
  return array 
}
removeElementFromEndOfArray(); 

