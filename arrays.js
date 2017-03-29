var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newarray = [];
  newarray = array.concat();
  newarray.unshift(element);
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newarray = [];
  newarray = array.concat();
  newarray.push(element);
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var array = [1, 2, 3];
  var index = array [2]
  return index
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  var newarray = array.slice(-2)
  return newarray
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  var newarray = array.slice(0, array.length -1)
  return newarray
}
