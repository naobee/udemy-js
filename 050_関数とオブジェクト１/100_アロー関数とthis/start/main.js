window.name = 'John';



const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        a();
    }
}
// person.hello();

// 
// ”オブジェクトのメソッド”として実行される場合、'this' => 呼び出し元オブジェクト
// ”関数”として実行される場合、'this' => グローバルオブジェクト
// レキシカルスコープの仕様に注意
// アロー関数内の this はスコープチェーンを辿って this の参照先を一階層上に探しに行く
// そのためアロー関数の宣言場所によって,this の参照先が変わることになる

function b() {
  const a = () => console.log('Bye ' + this.name);
  a();
}
// 関数がただ呼ばれた場合、関数のthisはウインドウオブジェクトを参照する
b();