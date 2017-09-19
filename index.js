var a = 656
var b = 378
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  return n++
}

function dec(n) {
  return n --
}

function makeInt(n) {
  return parseInt(n)
}


function makeIntBaseTen(n) {
  var n = '10'
  return parseInt(n)
}

function makeIntNaN(n) {
  return parseInt('nope!')
}

function preserveDecimal(n) {
  return parseFloat(n)
}

function preserveDecimalNaN() { //works
  return parseFloat('nope!')
}
