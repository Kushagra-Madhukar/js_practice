function arrSum(arr){
  let sum = 0;
  if(arr instanceof Array) {
    for(let i of arr) sum += i;
  }
  return sum;
}
//sumFunc is the function which can take any form of input and return its sum value
const sumFunc = (...num1s) => {
  const outer = arrSum(num1s);
  return function(...num2s) {
    const inner = arrSum(num2s);
    return inner ? sumFunc(outer+inner) : outer;
  }
}
function pC(val, identifier = ''){
  console.log(val, identifier);
}
pC(sumFunc(4, 2)(5)(9, 80)());

//However if you only need it for sum of numbers and won't pass more than 1 number in each function call, you can use
const sumFunc2 = a => b => b ? sumFunc2(a+b) : a;

console.log(sumFunc2(1)(2)(29)())
