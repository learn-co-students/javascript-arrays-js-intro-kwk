var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var A = array
  return [element, ...A]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var A = array
  A.unshift(element)
  return A
}

function addElementToEndOfArray(array, element) {
  var A = array
  return [...A, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var A = array
  A.push(element)
  return A
}

function accessElementInArray(array, index) {
  var A = array
  return A[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var A = array
  A.shift()
  return A
}

function removeElementFromBeginningOfArray(array) {
  var A = array
  return A.slice(1)
}

function destructivelyremoveElementFromEndOfArray(array) {
  var A = array
  A.pop()
  return A
}

function removeElementFromEndOfArray(array) {
  var A = array
  return A.slice(0,A.length - 1)
}