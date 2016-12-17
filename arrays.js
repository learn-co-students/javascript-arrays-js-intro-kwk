var chocolateBars = ['snickers', 'hundred grands', 'kit kat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  var array = [1]; 
  array.unshift('foo')
  return array 
}
addElementToBeginningOfArray(); 

function destructivelyAddElementToBeginningOfArray (array, element){
  array = [1];
  ["foo", ...array]
  return array 
}
destructivelyAddElementToBeginningOfArray(); 
