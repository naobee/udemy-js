function a() {
  console.log('called');
}

a();


// 関数を（）で囲った例。
(a)();

//即時関数の定義例。関数宣言全体を（）で囲むのが特徴。
let c = (function() {
  console.log('called');
  return 0;
})();


console.log(c);


// 関数式を使った定義例。この場合（）は要らない。
let b = function() {
  console.log('called');
}();



 let e = (function() {

   console.log('called');
   let privateVal = 0;
   let publicVal = 10;
   
   function privateFn() {
     console.log('privateFn is called');
   }
   function publicFn() {
     console.log('publicFn is called' + privateVal++);
   }
   
   return {
   publicVal,
   publicFn
   };
 })()

// privateValは関数の最初の部分で一度だけ初期化されるので、publicFnを呼び出す度にprivateValが＋１されていく。 
 e.publicFn();
 e.publicFn();
 e.publicFn();
 e.publicFn();
 e.publicFn();
 e.publicFn();
 
 
 //オブジェクトリテラルを使って値を取得
 console.log(e.publicVal);