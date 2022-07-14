//various ways to implement
//1
const throttle = (fn, delay) => {
 let timer;
 let flag = true;
 return function() {
   if(flag) {
        const context = this;
        const args = arguments;
        if(timer) clearTimeout(timer);
        flag = false;
        timer = setTimeout(() => {
            fn.apply(context, args);
            flag = true;
        }, delay);
   }
 }
}


//2
const throttle = (fn, delay) => {
 let timer;
 let flag = true;
 return function() {
   if(flag) {
        const context = this;
        const args = arguments;
        if(timer) clearTimeout(timer);
        fn.apply(context, args);
        flag = false;
        timer = setTimeout(() => {
            flag = true;
        }, delay);
   }
 }
}
