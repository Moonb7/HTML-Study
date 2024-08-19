// 상속(Inheritance)
// Class -> 유산으로 내려주는 주요 기능 !! 
// 부모 <-> 자식 관계

// 동물 전체에 대한 클래스
class Animal {
    // 생성자
    constructor (name) {
        this._name = name;
    }

    // 메서드(짖다)
    speak () {
        console.log(`${this._name} says!`);
    }
}

class Dog extends Animal {
    // 부모에게서 내려받은 메서드를 재정의할 수 있음
    // overriding..부모로 부터 상속받은 함수를 재정의 하는 것 C#에서도 자주 활용했었다
    speak() {
        console.log(`${this._name} bark!`);
    }
}

const cuttyPuppy01 = new Dog('cloudCandy');
cuttyPuppy01.speak();