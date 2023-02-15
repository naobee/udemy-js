/**
 * 問題：
 * MyLibraryという汎用的な使用を想定したライブラリのクラス
 * を作成したいとします。
 * 
 * 第3者に使用されることを想定しているため、このクラスを
 * 初期化した際（new MyLibrary()）にコンストラクター内で
 * ユーザーが何らかの独自の関数を実行できる仕組みを設けたい
 * と思いました。
 * 
 * そこで以下のように動作するeventsというオブジェクトを
 * 一つ作成する事にしました。
 * 
 * どのようにしてeventsオブジェクトを実装すれば良いか
 * 考えてみてください。
 * 
 * eventsオブジェクトはon、off、emitのメソッドを持っています。
 * 
 *********************************** 
 *
 * １．onの第一引数で実行場所、第二引数で実行したい関数を登録します。
 * events.on('beforeInit', customFn1);
 * events.on('beforeInit', customFn2);
 * events.on('afterInit', customFn3);
 * 
 *********************************** 
 *
 * ２．offで"on"と同じ実引数を渡すことで、onで登録した関数を解除できます。
 *
 ***********************************
 * 
 * ３．emitでonで登録した関数をすべて実行します。
 * （１）のように登録されていた場合には、new MyLibrary()
 * とすると以下の内容がコンソールに表示されるものとします。
 * 
 * customFn1
 * customFn2
 * library process
 * customFn3
 * 
 */
 
 // eventStack へのアクセスを制限するために即時関数を使用
 const events = (function() {
   const eventStack = new Map();
   
   return {
     on(type, fn) {
       // 二回目以降のための処理、eventStack でtype を取得し、undefindでなかったらそのまま使用、undefindなら新しいSetをfnStackに追加する
       const fnStack = eventStack.get(type) || new Set();
       fnStack.add(fn);
       eventStack.set(type, fnStack);
     },
     off(type, fn) {
       const fnStack = eventStack.get(type);
       // has を使って関数が格納されているかを確認、存在しているならdelete
       if(fnStack && fnStack.has(fn)) {
         fnStack.delete(fn);
       }
     },
     emit(type, _this) {
       const fnStack = eventStack.get(type);
       if(fnStack) {
         // 関数がfnsStackに複数入ってる場合のための処理、関数を一つずつ取り出して実行
         for(const fn of fnStack) {
           fn.call(_this);
         }
       } 
     }
   }
   })();

class MyLibrary {
	constructor() {
		events.emit('beforeInit', this);
	
		console.log('library process');
		
		events.emit('afterInit');
	}
	method() {
		// do something
	}
}
