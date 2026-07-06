
/*
C 의 구조체
struct 구조체이름 {
  int num;  // 속성(멤버변수/프로퍼티/필드)
  char ch;  // 속성(멤버변수/프로퍼티/필드)
  float a[4]; // 속성(멤버변수/프로퍼티/필드)
}

발전 ===> C++ 클래스
class 클래스이름 {
  int num;  // 속성(멤버변수/프로퍼티/필드)
  char ch;  // 속성(멤버변수/프로퍼티/필드)
  float a[4]; // 속성(멤버변수/프로퍼티/필드)
  sum();  // 기능(멤버메소드,멤버함수)
  함수();  // 기능(멤버메소드,멤버함수)
}
*/

// 클래스 선언
class Animal {
  name = ""; // 멤버변수
  age = 0;

  // 생성자
  constructor(name, age = 1) {
    // 매개변수의 값을 멤버변수로 초기화하는 동작을 생성자에서 한다.
    this.name = name; // 내객체.name = 매개변수 name;
    this.age = age;
  }

  // this.name 의 getter 멤버메소드 (캡슐화)
  getName() {
    return this.name;
  }

  eat(food) {
    console.log(`${this.name}은(는) ${food} 을(를) 먹습니다.`);
  }

  year() {
    console.log(`${this.name}은(는) ${this.age} 살 입니다.`);
  }

  // 정적 클래스 변수 (ES7 이후)  // 사용할때는 클래스이름.정적클래스변수명
  static title = "Animal";

  // 정적 메소드 (ES7 이후 가능)  // 사용할때는 클래스이름.정적클래스메소드명
  static print() {
    console.log("Animal 클래스의 정적 메소드 입니다.");
  }
}

// 자식 클래스 (상속),   자식클래스명 extends 부모클래스명
class Dog extends Animal {
  #breed = ""; // 비공개 필드 (클래스 외부에서 접근 불가, ES2022 이후)

  constructor(name, breed) {
    super(name); // 부모 생성자 호출 (필수!) super
    this.#breed = breed;
  }

  bark() {
    console.log(`${this.#breed} 종 ${this.name} 가 멍멍! 짓습니다.`);
  }

  // 메서드 오버라이딩도 가능
  eat(food) {
    console.log(`${this.name}은(는) ${food} 을(를) 자주 먹습니다.`);
  }
}

// 사용 예
let a1 = new Animal("개구리");
a1.eat("파리"); // 개구리 은(는) 파리 을(를) 먹습니다.
a1.year();
console.log("이름 : " + a1.getName()); // 이름 : 개구리
Animal.print(); // Animal 클래스의 정적 메소드 입니다.

const myDog = new Dog("맥스", "골든리트리버");
myDog.eat("사료"); // 맥스은(는) 사료 을(를) 자주 먹습니다. (부모 메서드 오버라이딩 사용)
myDog.bark(); // 골든리트리버 종 맥스 가 멍멍! 짓습니다.
myDog.year();
console.log("이름 메소드 : " + myDog.getName()); // 이름 : 맥스
myDog.name = "발발이";
console.log("이름 속성 : " + myDog.name); // 이름 : 맥스
console.log("종 : " + myDog.breed); // 종 : undefined
Dog.print(); // Animal 클래스의 정적 메소드 입니다.
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Dog); // true
console.log(a1 instanceof Animal); // true
console.log(a1 instanceof Dog); // true

/*
과제 1.
  - 이름과 생년월일과 출생국가, 출생도시, 이메일
    , 폰연락처가 있는 사람 클래스 Person 를 만드세요.
  - 이름과 생년월일, 출생국가, 출생도시는
    외부에서 수정 기능 못하며, 읽는 기능만 가능해요.
  - 이메일과 폰연락처는 읽는기능과 쓰는기능으로 처리해요.
*/
/*
과제 1 테스트
  - 이름 읽는 기능함수 : getName();
  - 생년월일 읽는 기능함수 : getBirth();
  - 출생국가 읽는 기능함수 : getBirthCountry();
  - 출생도시 읽는 기능함수 : getBirthCity();
  - 이메일 읽는 기능함수 : getEmail();
  - 폰연락처 읽는 기능함수 : getPhone();
  - 이메일 쓰는 기능함수 : setEmail("abc@gmail.com");
  - 폰연락처 쓰는 기능함수 : setPhone("101-1111-1111");

  - 객체.이름 = "값이 써지면 안됨";
  - 객체.생년월일 = "값이 써지면 안됨";
  - 객체.출생국가 = "값이 써지면 안됨";
  - 객체.출생도시 = "값이 써지면 안됨";
*/

class Person {
  #name = "";
  #birth = "";
  #country = "";
  #city = "";
  email = "";
  phone = "";

  print() {
  //   let msg = "이름 : " + this.getName() +  ", 생일 : " + this.getBirth() + ", 국가 : " + this.getBirthCountry()
  // + ", 도시 : " + this.getBirthCity() + ", ema : " + this.getEmail() + ", 폰번 : " + this.getPhone();
    let msg = `name: ${this.#name}, birth: ${this.#birth}, country: ${this.#country}, city: ${this.#city}, email: ${this.email}, phone: ${this.phone}`;
    console.log(msg);
    return msg;
  }

  constructor(name, birth, country, city, email, phone) {
    this.#name = name;
    this.#birth = birth;
    this.#country = country;
    this.#city = city;
    this.email = email;
    this.phone = phone;
  }
  getName() {
    return this.#name;
  }
  getBirth() {
    return this.#birth;
  }
  getBirthCountry() {
    return this.#country;
  }
  getBirthCity() {
    return this.#city;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone;
  }
  setEmail(email) {
    this.email = email;
  }
  setPhone(phone) {
    this.phone = phone;
  }

  static type = "사람";
  static output() {
    // console.log("나는 " + Person.type + " 입니다.");
    console.log(`나는 ${Person.type} 입니다.`);
  }

  static outputInfo(person) {
    console.log("사람 정보 : " + person.print());
  }
}

// 객체 생성
let p1 = new Person(
  "홍길동",
  "1731-12-22",
  "조선",
  "강릉",
  "그게뭔데",
  "그게뭔데"
);
let p2 = new Person(
  "최원철",
  "1970-01-01",
  "대한민국",
  "대도시",
  "ccc@gmail.com",
  "010-1111-2222"
);
let p3 = new Person(
  "Michael Jackson",
  "1965-01-01",
  "USA",
  "New York",
  "mjack@gmailc.om",
  "01-111-1111-1111"
);

// 객체 읽는 기능
console.log(`p1.getName = ${p1.getName()}`);
console.log(`p1.getBirth = ${p1.getBirth()}`);
console.log(`p1.getBirthCountry = ${p1.getBirthCountry()}`);
console.log(`p1.getBirthCity = ${p1.getBirthCity()}`);
console.log(`p1.getEmail = ${p1.getEmail()}`);
console.log(`p1.getPhone = ${p1.getPhone()}`);

console.log(`p2.getName = ${p2.getName()}`);
console.log(`p2.getBirth = ${p2.getBirth()}`);
console.log(`p2.getBirthCountry = ${p2.getBirthCountry()}`);
console.log(`p2.getBirthCity = ${p2.getBirthCity()}`);
console.log(`p2.getEmail = ${p2.getEmail()}`);
console.log(`p2.getPhone = ${p2.getPhone()}`);

console.log(`p3.getName = ${p3.getName()}`);
console.log(`p3.getBirth = ${p3.getBirth()}`);
console.log(`p3.getBirthCountry = ${p3.getBirthCountry()}`);
console.log(`p3.getBirthCity = ${p3.getBirthCity()}`);
console.log(`p3.getEmail = ${p3.getEmail()}`);
console.log(`p3.getPhone = ${p3.getPhone()}`);

// 객체 쓰는 기능
p1.setEmail("u111@gmail.com");
p1.setPhone("010-7777-8888");
console.log(`쓰고 나서 p1.getEmail = ${p1.getEmail()}`);
console.log(`쓰고 나서 p1.getPhone = ${p1.getPhone()}`);

p2.setEmail("u222@gmail.com");
p2.setPhone("010-2222-4444");
console.log(`쓰고 나서 p2.getEmail = ${p2.getEmail()}`);
console.log(`쓰고 나서 p2.getPhone = ${p2.getPhone()}`);

p3.setEmail("u333@gmail.com");
p3.setPhone("010-3333-6666");
console.log(`쓰고 나서 p3.getEmail = ${p3.getEmail()}`);
console.log(`쓰고 나서 p3.getPhone = ${p3.getPhone()}`);

// 멤버변수에 값이 써지면 안됨
p1.name = "값이 써지면 안됨";
p1.birth = "값이 써지면 안됨";
p1.country = "값이 써지면 안됨";
p1.city = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getName = ${p1.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getBirth = ${p1.getBirth()}`);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p1.getBirthCountry = ${p1.getBirthCountry()}`
);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p1.getBirthCity = ${p1.getBirthCity()}`
);

p2.name = "값이 써지면 안됨";
p2.birth = "값이 써지면 안됨";
p2.country = "값이 써지면 안됨";
p2.city = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getName = ${p2.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getBirth = ${p2.getBirth()}`);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p2.getBirthCountry = ${p2.getBirthCountry()}`
);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p2.getBirthCity = ${p2.getBirthCity()}`
);

p3.name = "값이 써지면 안됨";
p3.birth = "값이 써지면 안됨";
p3.country = "값이 써지면 안됨";
p3.city = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getName = ${p3.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getBirth = ${p3.getBirth()}`);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p3.getBirthCountry = ${p3.getBirthCountry()}`
);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p3.getBirthCity = ${p3.getBirthCity()}`
);

/*
오후 과제 2.
  - Person 클래스가 객체로 됐을때 객체의 속성들
    (이름,생년월일,등..)을 출력하는 기능이 필요합니다.
	  멤버메소드 print(); 를 만들어서 console.log 에 출력하는 기능을
	  만드세요.
  - 클래스정적변수 type 에는 "사람"이라는 값을 가지도록
    만드세요
  - 클래스정적메소드 output() 에는 "나는 사람 입니다."를
	  출력하도록 만드세요
  - 클래스정적메소드 outputInfo(person) 에는
    "사람 정보 : " + print() 내용을 연결해서 출력하세요.
*/

// function printPerson(per) {
//   console.log("이름 : " + per.getName());
//   console.log("생일 : " + per.getBirth());
//   console.log("국가 : " + per.getBirthCountry());
//   console.log("도시 : " + per.getBirthCity());
//   console.log("ema : " + per.getEmail());
//   console.log("폰번 : " + per.getPhone());
// }

// printPerson(p1);
// printPerson(p2);
// printPerson(p3);
// printPerson("ㅁㅁㅁ");

p1.print();
p2.print();
p3.print();

Person.output();

Person.outputInfo(p1);


/*
자습문제 : img 폴더에 있는 car_class.png, dog_class.png, human_class.png 파일을 보고 javascript 에서 클래스로 만드는 연습을 하세요
오후 문제 3.
  Person 클래스를 상속받는 자식 클래스 Student 를 만든다.
  Student 에는 학교이름, 학번 속성 2개를 만든다.
  let stu01 = new Student(이름, 생일, 국가, 도시, 이메일, 폰번, 학교이름, 학번); 생성하도록 한다.
  stu01.print(); 하면 기존의 이름,생일 등등 정보가 출력되는데 그 뒤로 학교이름과 학번도 출력하도록 만든다.
*/