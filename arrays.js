var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray (arr, elt) {
  var tempArr = arr
  tempArr.unshift(elt)
  return tempArr
}
function destructivelyAddElementToBeginningOfArray(arr, elt) {
  arr.unshift(elt)
  return arr
}
function addElementToEndOfArray (arr, elt) {
  var tempArr = arr
  tempArr.push(elt)
  return tempArr
}
function destructivelyAddElementToEndOfArray(arr, elt) {
  arr.push(elt)
  return arr
}
function accessElementInArray(arr, index) {
  return arr[index]

}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}
function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice(1)
  return arr
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr

}
function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1)
  return arr
}
