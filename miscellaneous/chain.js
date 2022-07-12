/**
 * chain(['a', 'b', 'c', 'd'], 2)  => [['a', 'b'], ['c', 'd']]
 * chain(['a', 'b', 'c', 'd', 'e'], 3) => [['a', 'b', 'c'], ['d', 'e']]
 */

function chain(arr, linkLength) {
   let chainArr = [];
   let unprocessedArr = [...arr];
   while(unprocessedArr.length) {
     chainArr.push(unprocessedArr.splice(0, linkLength));
   }
   return chainArr;
}
console.log(chain(['a', 'b', 'c', 'd', 'e', 'f'], 2));
