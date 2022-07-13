//various ways to implement(I prefer 3 & 2)
//1
const debounce = (fn, delay) => {
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
const debounce = (fn, delay) => {
 let timer;
 return function() {
      const context = this;
      const args = arguments;
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(context, args);
      }, delay);
 }
}

//3
const debounce = (fn, delay) => {
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
