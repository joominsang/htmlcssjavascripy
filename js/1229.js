let d;
var a = 10;
let b = 20;
let userName = "Alice";
const c = 30, PI = 3.14159;

b = 200;
userName = "Bob";

try {
  a = 100;
  d = 500;
  c = 300;
  b = 400;
  PI = 3.14;
} catch (e) {
  console.log('에러발생');
}

// const 객체는 내부 값 변경 가능
const user = { name: "Tom" };
user.name = "Jerry"; // ✔ 가능
// user = { age: 19 };
d = 700;

const obj1 = new Object();
const arr1 = [1, 2, 4, 5, 6, "a", "b"];
const func1 = function() {
//  alert('aaaaa');
};

func1();

let c1 = 10;
c1 -= 5;
console.log(c1);  // 5
console.log(c1++);  // 5
console.log(++c1);  // 7
console.log(--c1);  // 6
console.log(c1--);  // 6
console.log(c1);  // 5

console.log( d++ / 100 * b - ++c1 ); // 700 / 100 * 200 - 6
console.log(c1);
console.log(d);

let user1 = null;
let defaultUser = user1 || "게스트"; // "게스트"
let validUser = user1 && user1.name;  // null
console.log(defaultUser);
console.log(validUser);

let myV1 = 10 + 20 - 40;
console.log(myV1);

// 증감 연산자
let count = 5;
console.log(count++); // 5 (후위 증가: 출력 후 증가)
console.log(count);   // 6
console.log(++count); // 7 (전위 증가: 증가 후 출력)

// 비교 연산자 
console.log(10 == '10'); // true (동등 비교: 타입은 무시)
console.log(5 == "5");   // true (값만 비교: 타입은 무시)
console.log(5 === "5");  // false (엄격 비교: 값과 데이터 타입 모두 비교)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true (엄격 비교: 값과 데이터 타입 모두 비교)
console.log(10 > 5);     // true
console.log(10 <= 10);   // true

// 할당 연산자
let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6

// 삼항 연산자
// (조건) ? (조건이 참일때) : (조건이 거짓일때)
let age = 20;
let status = (age >= 18) ? ("성인") : ("미성년자"); // "성인"


