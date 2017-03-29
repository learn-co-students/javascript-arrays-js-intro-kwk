var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
var moreChocolateBars = [element, ...array]
  return moreChocolateBars
}
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
return array
}
function addElementToEndOfArray(array, element) {
  var endof = [...array, element]
  return endof
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
var access = (array[index]);
return access
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  var yey = array
yey.shift()
  return yey
}
function removeElementFromBeginningOfArray(array) {
  var slicing = array
  slicing = slicing.slice(1)
  return slicing
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var popi = array
popi.pop()
  return popi
}
function removeElementFromEndOfArray(array) {
  var sladeWilson = array
  sladeWilson = array.slice(0, sladeWilson.length - 1)
  return sladeWilson
}
