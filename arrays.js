var chocolateBars=["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,el1){
  return [el1, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,el1){
    array.unshift(el1)
    return array
}

function addElementToEndOfArray(array,el1){
  return [...array, el1]
}

function destructivelyAddElementToEndOfArray(array,el1){
    array.push(el1)
    return array
}

function accessElementInArray(array,index){

    return array[index]
}

function removeElementFromBeginningOfArray(array){
    array.shift()
    return array
}

function removeElementFromEndOfArray(array){
  array.pop()
    return array
}
