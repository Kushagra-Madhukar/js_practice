function myMemo(fn, context) {
  const memoStore = {};
  return function(...args) {
     const key = JSON.parse(args);
     if(!memoStore[key]) memoStore[key] = fn.apply(context || this, args);
     return memoStore[key];
  }
}

const slowCircleArea = (x) => {
  for(let i = 0; i<200000000;i++) {}
  return 3.14 * x*x;
}

const memoizedSlowCircleArea = myMemo(slowCircleArea);
const startTime = new Date().getTime();
console.log(memoizedSlowCircleArea(10));
const initialRunTime = new Date().getTime();
console.log(memoizedSlowCircleArea(10));
const afterMemoRunTime = new Date().getTime();
console.log(`For unmemoized call it took ${initialRunTime - startTime}ms, For memoized call it took ${afterMemoRunTime - initialRunTime}ms`);
