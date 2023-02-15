/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 * 
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */
 
// function* genStep({min = 0, max = 100, step = 0}) {
//   let i = min - step;
//   if(i < max) {
//     yield i += step;
//   } else {
//     return
//   }
// }

// function* genStep({min = 0, max = 100, step = 0} = {}) {
//   let i = min - step;
//   while(i < max) {
//     yield i += step;
//   } 
//   return
// }


// 値の初期値だけでなく、オブジェクトの初期値も設定する （"= {}"の部分）
function* genStep({min = 0, max = 100, step = 1} = {}) {
  for(let i = min; i <= max; i += step) {
    yield i;
  }
}



const it = genStep({min: 4, max: 10, step: 2});
  
for(let value of it) {
  console.log(value);
}
