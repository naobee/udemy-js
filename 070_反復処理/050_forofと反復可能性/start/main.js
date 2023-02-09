const arry = ['a', 'b', 'c'];

arry[4] = 'e';

Object.prototype.methodo = function() {}

Object.defineProperty(arry, 0, {
  enumerable: false
})

for(let v of arry) {
  console.log(v);
}

for (let key in arry) {
  // if(obj.hasOwnProperty(key)) {
  console.log(key, arry[key]);
  //  }
}

const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);