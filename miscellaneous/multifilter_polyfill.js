// Input:
// const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
// const filtered = arr.multiFilter((e) => typeof e === "number");
// console.log(JSON.stringify(filtered));

// Output:
// [[1,[2,[3]]]]

Array.prototype.multiFilter = function(callback){
   let arr = this;
   function recursiveFilter(arr){
     let ans = [];
     for(let i=0;i<arr.length;i++){
       if(Array.isArray(arr[i])) ans.push(recursiveFilter(arr[i]));
       else if(callback(arr[i], i, arr)) ans.push(arr[i]);
     }
     return ans;
   }
   return recursiveFilter(arr);
}

let arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
let filtered = arr.multiFilter((e) => typeof e === "number");
console.log(JSON.stringify(filtered)); 
