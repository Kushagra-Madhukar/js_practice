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

function debounce(func, delay = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, delay);
  };
}
