// switch 문
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("사과입니다.");
    break; // break를 사용해야 해당 case만 실행하고 switch 문을 빠져나감
  case "banana":
    console.log("바나나입니다.");
    break;
  default:
    console.log("다른 과일입니다.");
}

if (fruit == "apple") {
  console.log("사과입니다.");
} else if (fruit == "banana") {
  console.log("바나나입니다.");
} else {
  console.log("다른 과일입니다.");
}

let day = 2;
switch (day) {
  case 1:
    console.log("월요일"); // break;
  case 2:
    console.log("화요일"); // break;
  case 3:
    console.log("수요일"); // break;
  case 4:
    console.log("목요일"); // break;
  case 5:
    console.log("금요일"); // break;
  case 6:
    console.log("토요일"); // break;
  case 7:
    console.log("일요일"); // break;
  default:
    console.log("이상한 요일");
}

for (let i = 1; i <= 5; i++) {
  console.log("for 반복: " + i); // 1, 2, 3, 4, 5 출력
}

let count = 0;
while (count < 3) {
  console.log("while 반복: " + count); // 0, 1, 2 출력
  count++;
}

let count2 = 0;
do {
  console.log("do ~ while 반복: " + count2); // 0, 1, 2 출력
  count2++;
} while (count2 < 3);

const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log("for...of: " + num); // 10, 20, 30 출력
}
console.log(numbers);

const user = { name: "Tom", age: 25, kor: 88, eng: 85, mat: 81 };
for (const key in user) {
  console.log("for...in: " + key, user[key]);
}
console.log("user.name: " + user.name);
console.log("user.age: " + user.age);
console.log("user.name: " + user["name"]);
console.log("user.age: " + user["age"]);

function greet(name) {
  return "안녕하세요, " + name + "님!";
  return `안녕하세요, ${name}님!`;
}
console.log(greet("홍길동의 손자 홍새한"));

sum(1, 2, 3, 4, 5);
function sum(title, ...numbers) {
  let sum = numbers.reduce((total, num) => total + num, 0);
  console.log(`${title}, ${sum}, ${numbers}`);
}

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20

const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(4, 5)); // 출력: 20

const createPerson = (name, age, home) => ({ name, age, home });
// let hgd = createPerson("홍길동",32,"강화도");
console.log(createPerson("홍길동", 32, "강화도"));

let x1 = 20;
{
  let x1 = 30;
  console.log(x1);
}
console.log(x1);

let colors = ["red", "green", "blue"]; // Array
// map - 새 배열 생성
const upperColors = colors.map((x) => x.length);
console.log(upperColors); // ["RED", "GREEN", "BLUE"]

let newColors = [];
for (let i = 0; i < colors.length; i++) {
  newColors.push(colors[i].length);
}
console.log(newColors);

const student = {
  name: "Grace",
  age: 22,
  major: "Computer Science",
  isEnrolled: true,
  hobbies: ["coding", "reading"],
};
console.log(student);
let str1 = JSON.stringify(student); // JavaScript student 객체를 JSON 표현 문자열로 변환
console.log(str1);

let stu1 = JSON.parse(
  '{"name":"홍길동","age":32,"major":"Computer Science","isEnrolled":true,"hobbies":["coding","reading"]}'
); // JSON 표현 문자열 str1 을 JavaScript 객체로 변환
console.log(stu1);

const calculator = {
  sum: 0,
  add(number) {
    this.sum += number;
    return this;
  },
  subtract(number) {
    this.sum -= number;
    return this;
  },
  getValue() {
    return this.sum;
  }
};
console.log(
  calculator
    .add(10)
    .add(50)
    .add(30)
    .subtract(5)
    .getValue()
);


// 객체 생성
const person = {
    name: "김철수",
    age: 28,
    job: "개발자",
    skills: ["JavaScript", "Vue", "Node.js"],
    address: {
        city: "서울",
        district: "강남구"
    }
};
// 객체 구조 분해
const { name: userName, age: userAge, job = "무직" } = person;
console.log(userName);  // "김철수"
console.log(userAge);   // 29
console.log(job);       // "무직" (기본값)

// 중첩 구조 분해
const { address: { city } } = person;
console.log(city);      // "서울"

// 객체 순회
for (let key in person) {
    console.log(`객체 in ${key}: ${person[key]}`);
}

Object.entries(person).forEach(([key, value]) => {
    console.log(`객체 entries ${key}: ${value}`);
});