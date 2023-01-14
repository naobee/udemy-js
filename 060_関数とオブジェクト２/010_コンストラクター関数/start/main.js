function Person(name, age) {
  this.name = name;  // インスタンス化した際に格納したいプロパティを定義する
  this.age = age;  // this.プロパティ名で作成し、引数からわたってきた数値を格納する
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);