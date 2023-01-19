function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// hasOwnProperty 指定された引数のプロパティがオブジェクト自身の直下に存在するかを確認
const result = Person.hasOwnProperty('hello');
console.log(result);
// in 指定された名前のプロパティやメソッドが存在するかプロトタイプチェーンを遡って確認
console.log('name' in bob);

