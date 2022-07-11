
/* 
Create a function that returns the number of all possible item types matching a given condition passed as callback. The condition should be checked for all items nested in any array
It should
Input:
const arr = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }]], "bar"]];
const count = countInArray(arr, (e) => typeof e === "number");
console.log(count);

Output:
4 */

// We can also find the number of arrays in the array with this

const deepSearcher = (arr, test) => {
  let count = test(arr) ? 1 : 0;
  if(!Array.isArray(arr)) return count;
  for(let ele of arr) {
    if(Array.isArray(ele)) count += deepSearcher(ele, test);
    else if(test(ele)) count++;
  }
  return count;
}
const arrx = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }]], "bar"]];
console.log(deepSearcher(arrx, (e) => typeof e === "number"));
console.log(deepSearcher(arrx, (e) => e instanceof Array));


// solution 2(bekar)
const arr = [[[1, 3, 5]], 0, 1, ['hello'], [2, 3]];

const newArr = arr.flat(Infinity);
let count = 0;
newArr.forEach(i => {
  if(typeof i === 'number') count++;
})
console.log(count);
