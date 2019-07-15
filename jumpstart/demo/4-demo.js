var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var s = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"];

//map
var aPlus1 = a.map(function (i) { return i + 1; });
console.log(aPlus1)


//filter
var bigNumbers = a.filter(function (i) { return i > 5; });
console.log(bigNumbers)


//some
var hasCharlie = s.some(function (i) { return i == "charlie"; });
console.log(hasCharlie)


//every
var allPositive = a.every(function (i) { return i >= 0; });
console.log(allPositive)


//forEach
s.forEach(function(item, index) {
console.log(item)
});

//reduce
var sum = a.reduce(function (previous, current) { return previous + current; });
console.log(sum)

//sort
var aReversed = a.reverse();
console.log(aReversed);

var sorted = aReversed.sort();
console.log(sorted);

//splice
var aSpliced = a;
aSpliced.splice(2, 2, "20", "21");
console.log(aSpliced)