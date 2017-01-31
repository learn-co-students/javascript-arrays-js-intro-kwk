var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(b,a) {
  return [a,...b]
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b);
  return a
}
function addElementToEndOfArray(a,c) {
  return [...a,c]
}
function destructivelyAddElementToEndOfArray(a, d) {
  a.push(d)
  return a;
}
function accessElementInArray(a,z) {
  return a[z]
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a
}
function removeElementFromBeginningOfArray(r) {
  r.slice(1);
  return r
}
function destructivelyRemoveElementFromEndOfArray(s) {
  s.pop();
  return s
}
function removeElementFromEndOfArray(t) {
  return t.slice(0,t.length-1);
  return t
}
