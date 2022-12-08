let obj = {
  prop1: 'value1',
  prop2: 'balue2',
  // オブジェクトのプロパティに格納された関数を’メソッド’と呼ぶ
  prop3: function() {
    console.log('value3');
  },
  prop4: {
    prop5: 'value5'
  }
}
obj.prop3()
console.log(obj.prop4.prop5);
obj.prop6 = 'value6';
console.log(obj.prop6);