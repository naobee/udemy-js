function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

// Personのhelloメソッドを流用して日本人のオブジェクトを整理するJapaneseというコンストラクタをprototype継承によって作成する
function Japanese(name, age, gender) {
// Personのコンストラクタ関数の継承、下のthisはJapaneseの関数コンテキストのthisを指す
  Person.call(this, name, age)
  this.gender = gender;

}

// Personの prototypeを objectのcreateによって Japaneseの prototypeに格納する
// Object.create は、第一引数に渡したオブジェクトをプロトタイプに持つ空のオブジェクトを作成する
Japanese.prototype = Object.create(Person.prototype);


Japanese.prototype.bye = function() {
  console.log('Sayonara ' + this.name);
}


const taro = new Japanese('Taro', '23', 'Male');
console.log(taro);

taro.bye();