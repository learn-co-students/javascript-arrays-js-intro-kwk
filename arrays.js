var chocolateBars = ['snickers', 'hundred grands', 'kit kat', 'skittles'];

//First Function
function addElementToBeginningOfArray (array, element){
  var array = [1];
  array.unshift('foo')
  return array
}
addElementToBeginningOfArray();

// Second Function
function destructivelyAddElementToBeginningOfArray (array, element){
  var array = [1];
  array = ['foo', ...array]
  return array
}
destructivelyAddElementToBeginningOfArray();

// Third Function
function addElementToEndOfArray (array, element){
  var array = [1];
  array.push('foo')
  return array
}
addElementToEndOfArray();

// Fourth Function
function destructivelyAddElementToEndOfArray (array, element){
  var array = [1];
  array = [ ...array, "foo"]
  return array
}
destructivelyAddElementToEndOfArray();

// Sixth Function
function accessElementInArray (array, index){
  var array = [1, 2, 3];
  return  array[2]
}
accessElementInArray();

// Seventh Function
function destructivelyRemoveElementFromBeginningOfArray (array){
  var array = [1, "foo"];
array.shift()
return array
}
destructivelyRemoveElementFromBeginningOfArray();

//Eighth Function
function removeElementFromBeginningOfArray (array){
  var array = [2, 3];
  array = array.slice(0)
  return array
}
removeElementFromBeginningOfArray();

// Ninth Function
function destructivelyRemoveElementFromEndOfArray (array) {
  var array = [2, 3];
  array.pop()
  return array
}
destructivelyRemoveElementFromEndOfArray();

// Tenth Function
function removeElementFromEndOfArray (array) {
  var array = [1, 2];
  array.slice(0, array.length - 1)
  return array
}
removeElementFromEndOfArray();
