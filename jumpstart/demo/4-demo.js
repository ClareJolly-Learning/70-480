var fruit = ['orange', 'pear', 'pineapple', 'apple', 'cherry'];

fruit.forEach(function(item){
  console.log(item)
})
  console.log(fruit.some(function(item, index) {
    return item[0] === 'a';
  })) // true

  console.log(fruit.some(function(item, index) {
    return item.length < 1;
  })) // false