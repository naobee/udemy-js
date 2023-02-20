new Promise(function(resolve, reject) {
  console.log('promise');
  // resolve("hello");
  // reject("bye");
  setTimeout(function() {
    resolve("hello");
  }, 1000)
}).then(function(data) {
  console.log('then:' + data);
  // throw new Error();
  return data;
}).then(function(data) {
  console.log('then ' + data);
  return data;
}).catch(function(data) {
  console.log('catch: ' + data);
}).finally(function() {
  console.log('finally');
})


// this console means end of the global context.
console.log('global end');