function sumString(a, b) {
   let carry = 0;
   let curSum = 0;
   let totalSum = '';
   let i = a.length - 1;
   let j = b.length - 1;
   while(i>=0 && j>=0){
      currSum = carry + parseInt(a[i--]) + parseInt(b[j--]);
      carry = currSum >= 10 ? 1 : 0;
      totalSum = currSum%10 + totalSum;
   }
   while(i>=0){
      if(carry) {
        currSum = carry + parseInt(a[i--]);
        carry = currSum >= 10 ? 1 : 0;
        totalSum = currSum%10 + totalSum;
      } else {
        totalSum = a.slice(0, i+1) + totalSum;
        i=-1;
        /* totalSum = parseInt(a[i--]) + totalSum */;
      }
   }
    while(j>=0){
      if(carry) {
        currSum = carry + parseInt(a[j--]);
        carry = currSum >= 10 ? 1 : 0;
        totalSum = currSum%10 + totalSum;
      } else {
        totalSum = b.slice(0, j+1) + totalSum;
        j=-1;
      }
   }
   if(carry) totalSum = '1' + totalSum;
   return totalSum;
}

console.log(sumString('123', '456')); // 579
console.log(sumString('999', '1')); // 1000
console.log(sumString('2', '3')); // 5
console.log(sumString('9999999999999999999', '9999999999999999999')); //19999999999999999998
console.log(sumString('9999999999999999999', '1')); // 10000000000000000000
