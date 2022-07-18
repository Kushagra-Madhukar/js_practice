/**
 * value = sum(1,2,3,4)
 * value = sum(1,2)(3)(4)
 * value = sum(1)(2)(3)(4)
 * value = sum(1,2,3)(4)
 */

const sum = function (...args) {
   if(args.length === 4) return args.reduce((acc, curr) => acc + curr, 0);
   else return function(...innerArgs) {
      return sum(...[...args, ...innerArgs]);
   }
}

function log(arg) {
  console.log(arg);
}

log(sum(11, 20, 30)(14));
log(sum(1, 2)(7, 9));
log(sum(1, 2, 3, 4));
log(sum(2)(3)(4)(7));
log(sum(9, 10)(11)(20));
