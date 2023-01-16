console.log("code start");
const a = 100;

const operate = (val) => {
  return new Promise((resolve, reject) => {
     val= val * 3;
    return resolve(val);
  });
};

operate(a).then((result)=>console.log(result));


console.log("code end");