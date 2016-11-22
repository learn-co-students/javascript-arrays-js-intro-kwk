var chocolateBars = [`snickers`, `hundred grand`, `kitkat`,  `skittles`]

function addElementToBeginningOfArray(array, element) {
  var newArray = array
  newArray.unshift(element)
  return newArray
} // addElementToBeginningOfArray

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
} // destructivelyAddElementToBeginningOfArray

function addElementToEndOfArray(array, element) {
  var newArray = array
  newArray.push(element)
  return newArray
} // addElementToEndOfArray

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
} // destructivelyAddElementToEndOfArray

function accessElementInArray(array, index) {
  return array[index]
} // accessElementInArray

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
} // destructivelyRemoveElementFromBeginningOfArray

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
} // removeElementFromBeginningOfArray

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
} // destructivelyRemoveElementFromEndOfArray

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length-1)
  return array
} // removeElementFromEndOfArray
