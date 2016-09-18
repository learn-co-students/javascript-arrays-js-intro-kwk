var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  { const array = [1]
  {  const element = ["foo"]
  }
  }
return [element, ...array]; }

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift("foo")

return array;
  }


  function addElementToEndOfArray(array, element) {
    { const array = [1]
    {  const element = ["foo"]
    }
    }
  return [...array, element]; }


  function destructivelyAddElementToEndOfArray(array, element) {
     array.push("foo")
    return array;
    }

    function accessElementInArray(array, index) {
      var array = [1, 2, 3];
      var index = array[2]
    return index}




 function removeElementFromBeginningOfArray(array) {
   var array = [1, 2, 3]
  var arrays = array.slice(-2)
    return arrays }


function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  var arrays = array.slice(0, array.length -1)
  return arrays }
