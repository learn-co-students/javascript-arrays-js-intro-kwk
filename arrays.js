var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){
  newArr = [element, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr
}

function accessElementInArray(arr, i){
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  newArr = arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  newArr = arr.slice(0, arr.length - 1)
  return newArr
}

function addElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}
