const inputs = ['12:10AM', '5:49AM', '12:10PM', '1:10PM', '10:10PM'];

// Output
// 00:10
// 05:49
// 12:10
// 13:10
// 22:10

function timeConverter(time) {
  const timeZone = time.slice(this.length - 2);
  const colonIdx = time.indexOf(":");
  let hour = time.slice(0, colonIdx);
  let minutes = time.slice(colonIdx+1, this.length - 2);
  if(timeZone === 'AM'){
     hour = hour === "12" ? "00" : (hour >= 10 ? hour : '0' + hour);
  } else {
     hour = parseInt(hour) < 12 ? `${parseInt(hour) + 12}` : hour;
  }
  return `${hour}:${minutes}`;
}

let outputs = [];
for(let t of inputs) {
   outputs.push(timeConverter(t));
}
console.log(outputs);
