var chocolateBars = [ "snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array,element){
var array=[1];
return (["foo",...array]);
}

function destructivelyAddElementToBeginningOfArray(array,element){
var array=[ 1 ];
array.unshift("foo");
return array;
}

function addElementToEndOfArray(array,element){
var array=[1];
return ([...array,"foo"]);
}

function destructivelyAddElementToEndOfArray(array, element){
var array=[ 1 ];
array.push("foo");
return array;
}

function accessElementInArray(array,index){
return (array[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  var array=['foo',1];
  array.shift('foo');
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array){
  var array=[1,'foo'];
  array.push('foo');
  return array;
}
function removeElementFromBeginningOfArray(array){
var array=[1,2,3];
return array.slice(1);
}

function removeElementFromEndOfArray(array){
var array=[1,2,3];
return array.slice(0,array.length-1);
}
