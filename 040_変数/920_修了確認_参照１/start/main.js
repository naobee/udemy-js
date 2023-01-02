/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;

// console.log(val); // 問題１
// console.log("回答: 0");

let obj = {
    prop1: 10
}
const obj2 = obj;
obj2.prop1 = 9;

// console.log(obj); // 問題２
// console.log("回答: prop1: 9");

function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);

// console.log(obj); // 問題３
// console.log("回答: prop1: 9, prop2: 8");

function fn2(arg) {
    arg = {};  //新しいオブジェクトで初期化、ここで元の引数の参照先とは別物になるため元のオブジェクトには影響を与えない
    return arg;
}
const obj4 = fn2(obj); // 問題４

// console.log(obj); // 問題４
// console.log("回答: prop1: 9, prop2: 8");