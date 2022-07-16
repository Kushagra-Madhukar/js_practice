// input
var user = {
  name: 'Vishal',
  address: {
    primary: {
      house: '109',
      street: {
        main: '21',
        cross: '32',
      },
    },
  },
};

function flatten(obj){
  let ans = {};
  function flattenInner(obj, parentKey){
     for(let i in obj){
        if(typeof obj[i] === 'object') return flattenInner(obj[i], `${parentKey}${i}_`);
        else ans[`${parentKey}${i}`] = obj[i];
     }
  }
  flattenInner(obj, '');
  return ans;
}
const flattenedObj = flatten(user);
console.log(flattenedObj);

// * similar problem - find the average of numbers in recursive array

let arr = [
  3,
  null,
  [5, 6, undefined],
  false,
  [1, null, [2, [5, 6], 5], undefined],
];

const averageSumFn = (arr) => arr.reduce(function abc(acc, curr){
   if(typeof curr === 'number') return {count: acc.count+1, sum: acc.sum+curr, average: (acc.sum+curr)/(acc.count+1)};
   else if(Array.isArray(curr)) return curr.reduce(abc, {count: acc.count, sum: acc.sum, average: acc.average});
   return acc;
}, {count: 0, sum: 0, average: 0}).average;

console.log(averageSumFn(arr));
