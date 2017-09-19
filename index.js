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

function increment(n) {
  return n++
}

function decincrement(n) {
  return n --
}

function makeInt(n) {
  return parseInt(n)
}

function makeIntBaseTen(n) {
  return 10 + parseInt(n)
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
