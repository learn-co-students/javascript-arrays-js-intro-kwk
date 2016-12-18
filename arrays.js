var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, foo){
  var bars = ['foo', ...array];
  return bars;
}
function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift('foo');
  return array;
}
function addElementToEndOfArray(array, foo){
  var bars = [...array, 'foo'];
  return bars;
}
function destructivelyAddElementToEndOfArray(array, foo){
  array.push('foo');
  return array;
}
function accessElementInArray(array, index){
  return (array[2]);
}
function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}