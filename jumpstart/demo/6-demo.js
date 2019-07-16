function isTypeOf(o, t) {
  if (t && t.charAt && t.charAt(0)) {
    return (Object.prototype.toString.call(o) === "[object " + t + "]");
  } else {
    throw new Error(111, "Error in helper")
    // throw new Error ("Args", "'t' required and must be a string.");
  }
}

console.log(isTypeOf({test: 'test'},'Object'))
console.log(isTypeOf({test: 'test'},999))
