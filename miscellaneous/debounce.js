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
