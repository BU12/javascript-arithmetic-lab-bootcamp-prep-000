var a = 656
var b = 378
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  console.log(a - b)
}
function multiply(a, b) {
  a * b
}

function divide(a, b) {
  console.log(a / b)
}

function increment(n) {
  console.log(n += 1)
}

function decincrement(n) {
  console.log(n -= 1)
}

function makeInt(n) {
  console.log(parseInt(n))
}

function makeIntBaseTen(n) {
  console.log(10 + parseInt(n))
}

function makeIntNaN() {
  console.log(parseInt('nope!'))
}

function preserveDecimal(n) {
  console.log(parseFloat(n))
}

function preserveDecimalNaN() { //works
  console.log(parseFloat('nope!'))
}
