function a(name) {
  return 'hello ' + name;
}

//上の式を関数式にすると・・・
// const b = function(name) {
//   return 'hello ' + name;
// }

// 更にアロー関数にすると
const b = (name) => {
  return 'hello ' + name;
}
// 既にアロー関数として成立しているが、いくつかの記述を省略できる
// 引数が一つの場合、 () を省略できる
// 実行行が一行の場合、 {} と return を省略できる(実行行が複数行に渡る場合は省略できない)

const b = name => 'hello ' + name; 

console.log(b('Tom'));

// 引数を2つ以上取りたい場合、 () は省略できない
const b = (name, name1) => 'hello ' + name + name1; 

console.log(b('Tom', 'Bob'));

// 引数を取らない場合も、 () は省略できない 
const b = () => 'hello ';
//  _ でダミーの変数を渡すことによって、 () を使わない書き方もある
const b = _ => 'hello ';
