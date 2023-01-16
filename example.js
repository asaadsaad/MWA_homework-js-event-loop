var a = 100;
console.log(`a before any operation:${a}`);
setTimeout(() => {
//   a = a * 3;
  console.log(`a after multiplication:${a*3}`);
}, 0);
// a = a + 100;
console.log(`a after addition:${a+100}`);
