//const promisified = promisify(function)
//promisified().then().catch()
//for better understanding visit this:- https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/
function promisify(fn){
  return function(...args){
   return new Promise((resolve, reject) => {
      function customCallback(err, result){
         if(err) {
            reject(err)
         }
         resolve(result)
      }
      args.push(customCallback);
      fn.call(this, ...args);
   })
 }
}

//---------without promisify(callback)----------
const getSumAsync = (num1, num2, callback) => {
 
  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null);
  }
  return callback(null, num1 + num2);
}
getSumAsync(1, 1, (err, result) => {
  if (err){
    doSomethingWithError(err)
  }else {
    console.log(result) // 2
  }
})

//-------------------with promisify(promise)---------------------
const getSumPromise = promisify(getSumAsync) // step 1
getSumPromise(1, 1) // step 2
.then(result => {
  console.log(result)
})
.catch(err =>{
  doSomethingWithError(err);
})
