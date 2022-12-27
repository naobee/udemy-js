const a = {
  prop: 0
}

let { prop } = a;
// 分割代入を行う場合、プロパティの名前と変数の名前は基本的に一致させる必要がある。
// もしも名前を変えたい場合は以下のような書き方になる
// let { prop: b } = a;

prop = 1;

console.log(a, prop);

function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop);
}

fn(a);

// 分割代入で特定のプロパティのみを使用する場合の書き方
function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}

fn(a);

// オブジェクトが高い層にある場合
const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 1;

console.log(c, prop1, prop1.prop2);