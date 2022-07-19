Function.prototype.myCall = function(c, ...args){
  const context = c || this;
  context.fn = this;
  context.fn(...args);
}

Function.prototype.myApply = function(obj, args) {
  obj.fn = this;
  obj.fn(...args);
}

Function.prototype.myBind = function(obj, ...args) {
  const fn = this;
  return function(...params) {
    return fn.apply(obj, [...args, ...params]);
  }
}

Array.prototype.myforEach = function(callback){
   const arr = this;
   for(let i=0;i<arr.length;i++){
      callback(arr[i], i, arr);
   }
}

Array.prototype.myMap = function(callback){
   const ans = [];
   for(let i=0;i<this.length;i++){
      ans.push(callback(this[i], i, this));
   }
   return ans;
}

Array.prototype.myFilter = function(callback){
   const ans = [];
   for(let i=0;i<this.length;i++){
      if(callback(this[i], i, this)) ans.push(this[i]);
   }
   return ans;
}

Array.prototype.myReduce = function(callback, initalAcc){
   let acc = initialAcc;
   for(let i=0;i<this.length;i++){
      if(acc !== undefined) acc = callback(acc, this[i], i, this);
      else acc = this[i];
   }
   return acc;
}

Array.prototype.myReduceRight = function(callback, initialVal){
   let result = initialVal;
   let arr = this;
   for(let i=arr.length-1;i>=0;i--){
       if(result !== undefined) result = callback(result, arr[i], i, arr);
       else result = arr[i];
   }
   return result;
}
