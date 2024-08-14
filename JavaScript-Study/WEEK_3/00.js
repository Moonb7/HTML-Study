// 데이터 타입(심화), 실행 컨텍스트, this

// 데이터 타입(data type) 심화
// 데이터 타입의 종류(기본형과 참조형)

// 기본형(Primitive type) : Number, String, Boolean, null, undefined, Symbol(ES6에 추가된 타입)
// 참조형(Reference type) 은 객체(Object)하위요소로 
// : Array, Function, Date, RegExp, Map, WeakMap, Set, WeakSet

// 기본형과 참조형을 구분하는 기준은 '값의 저장 방식'과 '불변성 여부' 입니다.

// 값의 저장 방식, 복제의 방식
// 기본형 : 값이 담긴 주소값을 바로 복제
// 참조형 : 값이 담긴 주소값들로 이루어진 묶음을 가리키는 주소값을 복제, 즉 쉽게 말하면 객체의 주소값을 가져오고 객체의 요소를 이용할려면 객체의 주소값을 복사해 가져오고 또 다시 객체안에 있는 요소의 주소값을 복사해 데이터를 가져옵니다.

// 불변성의 여부 : 메모리를 기준으로 보면 될것 같습니다.
// 기본형 : 불변성을 띔 여기서의 불변은 주소 값을 이야기 하는것 같습니다. 한번 정해진 주소값은 변하지 않습니다.
// 참조형 : 불변성을 띄지 않음 참조형은 제가 알기로 데이터가 커서 이용할때마다 메모리에 올려 새롭게 주소가 바뀌는 걸로 알고 있습니다. 추가로 적어야 될거 같네요 체크

// 비트 : 0과 1을 가지고 있는 메모리를 구성하기 위한 작은 조각 2진수로 이루어져 있습니다.
// 바이트 : bit로는 0과 1로 만은 부담이되 2의 배수씩 해서 새로운 단위를 만듭니다. 그 중 8개 비트로 이루어진 단위를 바이트(byte)라고 합니다.
// 메모리 : 메모리는 byte단위로 구성되고 모든 데이터는 byte 단위의 식별자인 메모리 주소값을 통해서 서로 구분된다.

// java, c와 다른 javaScript의 메모리 관리 방식
// 정수형만을 보았을때 정수 8을 저장하는 방법
// JS : let a = 8(8byte) // 자바스크립트의 정수는 8바이트로 고정되어있다.
// Java : 숫자 데이터 타입의 크기에 맞게 다양하게 지정하여 사용할 수 있어 개발자가 메모리 관리에 좀 더 용이하게 이용할 수 있습니다.
// byte a = 8(1byte)
// short a = 8(2byte) 
// int a = 8(4byte)
// long a = 8(16byte)
// 일단 요즘 같이 메모리가 부족하지 않는 시대에서는 JS같은 언어를 이용해 따로 메모리 관리를 하지 않아도 충분히 사용할 수 있습니다.

// 식별자, 변수
var testValue = 3;
// 변수 = 3(데이터);
// 식별자 = testValue(변수명);

// 예시) 변수를 선언하고 할당될때의 메모리에 데이터가 들어가는 과정
var str;
str = 'test';
var str = 'test';

// 메모리 변수영역에 1002번에 str이 들어옵니다.
// 데이터 영역에 5003번에 'test'값을 저장합니다.
// 그럼 이 변수영역에서 str은 데이터 주소를 가져 5003을 가져 데이터를 이용할 수 있습니다.

// 왜 주소에 1002번에 한번에 값까지 바로 변수에 대입하지 않는 이유 = 무조건 새로 만드는이유
// 자유로운 데이터 변환
// - 이미 입력한 문자열을 늘린다면?
// - 자바스크립트에서 문자는(영문: 1byte, 한글: 2byte)로 만약 문자열의 길이가 늘어나게 값을 바꿔준다고 과정을 하면
// 100자 이상의 문자열이면 여러개의 메모리 공간 1003 1004번등의 공간까지 같이 이용해야되고 먼저 1005의 공간까지 이용할려 할때 1005번에 데이터 있으면 1005번에 저장된 데이터를
// 오른쪽으로 미루어 주고 활용을 해야되서 굉장히 비효율 적입니다. 결론 비효율 적이다.
// 메모리의 효율적 관리
// - 같은 데이터를 여러번 저장해야 된다면?
// - 몇만개의 변수에 똑같이 1이라는 값을 할당을 한다면 모든 변수에 몇만개의 변수 공간을 확보해야 됩니다. 그러면 메모리에 공간이 부족해질 수도 있어 이것또한 굉장히 비효율 적이다.
// 이렇게 하고자 하면 1이라는 데이터를 메모리 데이터영역에 저장하고 따로 변수를 만들어 1을 할당할 때마다 변수영역에서 데이터의 주소만 가져다쓰면 되서 굳이 여러 공간을 만들지 않아 효율적으로 이용할 수 있습니다.

// 기본형 데이터와 참조형 데이터
// 메모리를 기준으로 다시한번 생각해보는 두 가지 주요 개념
// 변수 vs 상수
// 변수 : 변수 영역에서 메모리를 변경할 수 있음
// 상수 : 변수 영역에서 메모리를 변경할 수 없음
// 여기서 메모리를 기준으로 불변하다 vs 불변하지 않다는
// 불변하다 : 데이터 영역에서 메모리를 변경할 없음
// 불변하지 않다 : 데이터 영역에서 메모리를 변경할 수 있음

// 'abc'라는 값이 데이터영역의 &5002라는 주소에 들어갔다고 가정을 해보겠습니다.
var a = 'abc';

// 'def'라는 값이 &5002라는 주소에 추가되는 것이 아닙니다.
// &5003에 별도로 'abcdef'라는 값이 생기고 a라는 변수는 &5002 -> &5003
// 이 때, &5002는 더 이상 사용되지 않아 자바스크립트에서 가비지컬렉터로 자동으로 수거해서 메모리관리를 해줍니다.
// 즉, "변수 a는 불변하다." 라고 할 수 있습니다.

// 예시) 객체를 선언하고 할당 될때의 메모리에 데이터가 들어가는 과정
// 기본형과 참조형 데이터 변수 할당 과정과 차이점 : 객체의 변수(프로퍼티) 영역의 별도 존재 여부
// 참조형 데이터는 별도 저장공간(obj1을 위한 별도 공간)이 필요합니다.
var obj1 = {
    a: 1,
    b: 'bbb',
}
// 변수 영역에 &1001번에 obj를 올립니다.
// 별도 저장공간에서 &7103번에 a, &7104번에 b를 올립니다. 객체의 변수(프로퍼티)를 올려줍니다.
// 그러고 데이터 영역에 &5001번에 1을 &5002번에 'bbb'를 올려줍니다. 데이터들을 저장합니다.
// &7103번에 a/&5001, &7104번에 b/&5002 의 형태를 가지면서 올립니다. 변수명에 맞게 변수주소를 넣어 줍니다.
// &1001번에 obj/&7103~부터 있다고 주소를 넣어 줍니다. 그리고 최종적으로 객체의 속성들의 주소를 넣어 줍니다.

// 참조형 데이터가 불변하지 않다(가변하다)라고 하는 이유
var obj1 = {
    a: 1,
    b: 'bbb',
}
// 데이터를 변경해본니다.
obj1.a = 2;
// 변경할 값인 숫자 2를 데이터 영역에 검색하여 없으면 새주소에 2값을 추가합니다.
// 그리고 별도 저장 공간 영역에서 주소를 새주소로 변경을 해줍니다.
// 데이터영역에는 여전히 불변값이지만, 별도 저장공간 영역에서는 변경이 가능하여 이것 때문에 참조형 데이터를 흔히, 불변하지 않다(가변하다)라고 합니다.

// 중첩객체의 할당
// 객체 안에 또 다른 객체가 들어가는 것을 말합니다.
var obj = {
    x: 3,
    arr: [3, 4, 5],
}
// obj.arr[1]의 탐색과정
// 사진 참고! 
// 중첨객체의 할당 메모리 과정.png

// 참조 카운트가 0인 메모리 주소의 처리
// 참조 카운트란 객체를 참조하는 변수나 다른 객체의 수를 나타내는 값입니다.
// 이 참조 카운트가 0이면 객체는 더 이상 사용되지 않으므로, 가비지 컬렉터에 의해 메모리에서 제거됩니다.

// 가비지 컬렏터(GC, Garbage Collector)
// 더 이상 사용되지 않는 객체를 자동으로 메모리에서 제거하는 역할을 해줍니다.
// 개발자가 따로 명시적으로 관리를 하지 않게 자바스크립트 엔진 내부적으로 수행되며, 직접적인 제어를 할 수 없습니다.

// 변수 복사 비교
var a = 10;
var obj1 = {c: 10, d: 'ddd'};

// 복사
var b = a;
var obj2 = obj1;
// 사진참고!

// 이후 값 변경
b = 15;
obj2.c = 20;

// 변경후 기본형 변수 복사의 결과는 다른 값 !
console.log(a === b); // false

// 참조형 변수 복사의 결과는 같은 값!(원하지 않는 결과가 나올 수 있습니다.) 이거는 복사시에 변수가 같은 주소를 바라보고 있어 따
console.log(obj1.c === obj2.c) // true로 obj1.c도 