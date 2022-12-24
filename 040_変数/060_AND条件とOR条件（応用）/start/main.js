function hello(name) {
  if(!name) 
  name = name || 'Tom';
// nameの値がfalsyな場合はOR条件によって'Tom'が返ることになる
  console.log('hello ' + name);
}

hello('')

let name = 'Bob';

name && hello(name);