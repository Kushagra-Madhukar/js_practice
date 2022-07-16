//various ways to implement
//1 => all of its executions will be after a delay of 300ms
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


//2 => all of the executions will be immediate but will have to wait 300ms for next execution
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

//3
const throttle = (fn, delay) => {
 let timer;
 return function() {
   if(!timer) {
        const context = this;
        const args = arguments;
        fn.apply(context, args);
        timer = setTimeout(() => {
           clearTimeout(timer);
        }, delay);
    }
  }
}

