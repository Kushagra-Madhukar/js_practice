//Promise.all
function randomPromise(num) {
  const randNum = Math.random() * 5;
  return new Promise((resolve, reject) => {
     setTimeout(() => {
        if(randNum <= 5 && randNum > 4.9) reject(`${num} rejected because randNum ${randNum} is between 4.9 and 5`);
        else resolve(num);
     }, randNum * 1000)
  })
}
const myPromiseAll = (promises) => {
   return new Promise((resolve, reject) => {
     let result = [];
     let completed = 0;
     const totalPromises = promises.length;
     promises.forEach((promise, i) => {
        promise
          .then(res => {
             result[i] = res;
             completed++;
             if(completed === totalPromises) resolve(result);
          })
          .catch(err => {
              reject(err);
          })
     })
   })
};

/* const allPromises = Array(10).map((val, i) => randomPromise(i+1)); */
const allPromises = [];
for(let i=1;i<=10;i++){
   allPromises.push(randomPromise(i));
}
myPromiseAll(allPromises)
       .then(res => console.log(res))
       .catch(err => console.log(err));
