function add(n1, n2) {
  return n1 + n2
}

function calc(n1, n2, processForCalc) {
  return processForCalc(n1, n2);
}

function executeMath() {
  console.log(calc(4,4,add));
}

executeMath()