const arry = [1, 2, 3, 4, 5];

const result = arry.reduce(function(accu, curr)  {
  return accu + curr * 2;
}, 0);

// const result = arry.reduce(function(accu, curr)  {
//   console.log(accu, curr);
//   return accu * curr;
// },);


console.log(result);