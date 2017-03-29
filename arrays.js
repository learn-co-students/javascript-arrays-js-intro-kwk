 var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles']

 function addElementToBeginningOfArray(array_in,element_add) {
   return [element_add,...array_in]
 }

 function destructivelyAddElementToBeginningOfArray(array_in,element_add){
   array_in.unshift(element_add)
   return array_in
 }

function addElementToEndOfArray(array_in,element_add){
  return [...array_in,element_add]
}

function destructivelyAddElementToEndOfArray(array_in,element_add){
  array_in.push(element_add)
  return array_in
}

function accessElementInArray(array_in,index){
  return array_in[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array_in){
  array_in.shift()
  return array_in
}

function removeElementFromBeginningOfArray(array_in){
  return array_in.slice(1)
}