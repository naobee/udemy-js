function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
// この行の実行で変数 add5 には num に5が設定されている状態の関数が格納される
const add10 = addNumberFactory(10);
const result = add10(10);

console.log(result);