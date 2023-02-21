function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)])
.then(function(data) {
  console.log(data);
}).catch(function(e) {
  console.error(e);
});
// sleep(0).then(function(val) {
//   return Promise.all([sleep(2), sleep(3), sleep(4)]);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
