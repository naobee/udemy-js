function F(a, b) {
    this.a = a;
    this.b = b;
    // 以下コメントアウトしているのはオブジェクトリテラル内の処理
    // const result = new Object();
    // result.a = 1;
    // return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1,2);
console.log(instance)
console.log(instance instanceof Object)
// instanceofは以下の処理を内部で行っている(インスタンスの__proto__とコンストラクターのprototypeの参照先が同じかの確認)
console.log(instance.__proto__ === F.prototype)
// 以下はinstanceofの使用例
// argの中身が配列かそれ以外（例えばオブジェクト）かをチェックし、処理を変える
function fn(arg) {
  if(arg instanceof Array) {
  arg.push('value')
  } else {
  arg['key'] = 'value';
  }
  console.log(arg)
 }
 
 fn({});
 fn([]);