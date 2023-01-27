/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
      // super を使って親クラスのプロパティを継承する場合、1番先頭で宣言する必要がある（独自プロパティの後に持ってくるとエラーとなる）
        super(name, age);
        this.gender = gender;
    }

    hello() {
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();
*/

const american = {
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    
    hello() {
       super.hello();
    }
}

Object.setPrototypeOf(bob, american);
bob.hello();