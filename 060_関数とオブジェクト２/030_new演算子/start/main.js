function F(a, b) {
  this.a = a;
  this.b = b;
  return {};
}

// new 演算子と同じ動きをする関数を以下に記述
// まずprototypeをコピーする
F.prototype.c = function() {}



// 下関数のCは渡ってくるコンストラクターを表す、...args は可変長の引数を受け取って配列に直すことができる
function newOpe(C, ...args) {
// 下の _this はC.prototypeが__proto__に格納された状態で生成される空のオブジェクトとなる（メソッド create の効果）

  const _this = Object.create(C.prototype);
// 空のオブジェクト_this をコンストラクター関数Cを実行するときの this として設定してCを実行することで、2行目、3行目の thisが空のオブジェクト_thisに設定される
// 以下の内で_thisは関数F2行目、3行目のthis、 argsは関数F一行目の引数をそれぞれ受け取る
  const result =　C.apply(_this, args);
  //console.log(result, _this);
  
  // 上の result がオブジェクト（かつ、nullではない）だった場合の処理、returnでresult（オブジェクト）を返す

  if(typeof result === "object" && result !== null)　{
    return result;
  }
  // オブジェクト以外なら処理したthisを返す
  return _this;
  
}

const instance = newOpe(F, 1, 2);


//console.log(instance)
