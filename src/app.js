function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}

module.exports.add = add;
module.exports.multiply = multiply;
module.exports.subtract = subtract;

if (require.main === module) {
  console.log("Sum:", add(2, 3));
  console.log("Product:", multiply(2, 3));
  console.log("Difference:", subtract(5, 3));
}

