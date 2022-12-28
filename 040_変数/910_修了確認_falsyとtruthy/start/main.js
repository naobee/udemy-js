/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
// true
console.log("0 == false", 0 == false);
// false
console.log("0 === false", 0 === false);
// true (false)
console.log('"false" == false', "false" == false);
// true
console.log('"0" == 0', "0" == 0);
// false
console.log('Boolean("0") === false', Boolean("0") === false);
// true
console.log('Boolean(0) === false', Boolean(0) === false);
// false
console.log('!Boolean(0) === false', !Boolean(0) === false);
// false 
console.log('-1 == false', -1 == false);
// false (true)
console.log('!10 === false', !10 === false);

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a = 1;

function fn(num) {
  if(num === undefined || num === null) {
    num = -1;
  }
    console.log(num);
}
fn(a);


/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */
function greeting(name, greet) {
  greet = greet || 'hello';
  // nameの値がfalsyな場合はOR条件によって'Tom'が返ることになる
  console.log(`${greet}, ${name}`);
}

greeting("Nami", "kon");
greeting("Nana");