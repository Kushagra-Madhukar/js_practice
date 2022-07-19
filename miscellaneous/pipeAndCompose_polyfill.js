// To know more about pipe and compose, visit: https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937

//-------------------Pipe Polyfill------------------------------------------
const reverse = (string) => string
  .split('')
  .reverse()
  .join('')
const get6Characters = (string) => string.substring(0, 6);
const uppercase = (string) => string.toUpperCase();
const getName = (person) => person.name;

// without pipe
const withoutPipeVal = reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))))

//with pipe
const myPipe = (...functions) => (value) => {
  return functions.reduce((accVal, currFn) => currFn(accVal), value)
}

const withPipeVal = myPipe(
  getName,
  uppercase,
  get6Characters,
  reverse
)({name: "Buckethead"});

console.log(withPipeVal);

//-------------------------------Compose Polyfill---------------------------------------------------------
// It is pipe but in reverse

const myCompose = (...fns) => val => fns.reduceRight((v, fn) => fn(v), val);

const withCompose = myCompose(
  reverse,
  get6Characters,
  uppercase,
  getName
)({name: "Buckethead"});

console.log(withCompose);
