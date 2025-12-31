// function checkAdult(age) {
// 	if (age >= 18) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
// }
// const checkAdult = function(age) {
// 	if (age >= 18) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
// }
const checkAdult = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};
let status2 = checkAdult(10) ? "성인" : "미성년자"; // "성인"

console.log(status2);

function deepCopy(obj) {
  // null이거나 객체가 아니면 그대로 반환
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // Date 객체
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  // RegExp 객체
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  // Map 객체
  if (obj instanceof Map) {
    return new Map(obj);
  }
  // Set 객체
  if (obj instanceof Set) {
    return new Set(obj);
  }
  // Error 객체
  if (obj instanceof Error) {
    return obj;
  }
  // 배열
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i]); // 재귀호출 복사
    }
    return arrCopy;
  }
  // 일반 객체
  const objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(obj[key]); // 재귀호출 복사
    }
  }
  return objCopy;
}

let obj1 = { name: "홍길동", age: 35, home: { addr: "조선", bungi: 38 } };
// let obj2 = {...obj1};
let obj2 = Object.assign({}, obj1);
obj2.name = "이순신";
obj1.age = 25;
obj2.home.bungi = 29; // 객체안에 객체가 있는경우에는 얕은복사로는 값이 복사되지 않는다.

let obj3 = deepCopy(obj1); // 객체안에 객체가 있으므로 deepCopy 라는 함수로 객체를 복사하면 가능하다. 모든 데이터 타입이 다 되지는 않는다.

console.log(obj1);
console.log(obj2);
obj3.home.bungi = 19;
console.log(obj3);

function createCounter() {
  let count = 0; // 외부에서는 접근할 수 없는 변수
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1
console.log(counter.count);

function show1to100() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// 동기프로그래밍 : 한줄의 명령어가 종료되어야지 다음줄의 명령어가 실행된다.
// 명령어의 종료 시간이 ns 처럼 사람이 느리다는 느낌을 못바든 빠른 종료 일때 동기 사용한다.
// console.log("동기프로그램");
// show1to100();
// console.log("출력1;");
// show1to100();
// console.log("출력2;");
// show1to100();
console.log("출력3;");

console.log("비동기프로그램");
// 비동기프로그래밍 : 한줄의 명령어가 종료될 필요없이 다음줄의 명령어가 바로 실행된다.
// 명령어의 실행 시간이 너무 길어서 마치 컴퓨터가 서 있는 현상이 발생될때 사용한다.
// 사용자는 컴퓨터가 서 있는 현상을 못 느낀다.
// setTimeout(show1to100, 1);
// console.log("출력1;");
// setTimeout(show1to100, 1);
// console.log("출력2;");
// setTimeout(show1to100, 1);
// console.log("출력3;");

function stepA(callback) {
  console.log(new Date() + " : A 작업 시작");
  setTimeout(() => {
    console.log(new Date() + " : A 출력");
    // 작업 완료 후 다음 단계 콜백 호출
    callback();
  }, 1000);
}

function stepB(callback) {
  console.log(new Date() + " : B 작업 시작");
  setTimeout(() => {
    console.log(new Date() + " : B 출력");
    // 작업 완료 후 다음 단계 콜백 호출
    callback();
  }, 1000);
}

function stepC(callback) {
  console.log(new Date() + " : C 작업 시작");
  setTimeout(() => {
    console.log(new Date() + " : C 출력");
    // 작업 완료 후 다음 단계 콜백 호출
    callback();
  }, 1000);
}

function finalStep() {
  console.log(new Date() + " : Success! 모든 비동기 작업 완료.");
}

// stepA(() => finalStep());
// stepB(() => {
//   finalStep();
// });
// stepC(finalStep);

// stepA(() => {
//   stepB(() => {
//     stepC(() => {
//       finalStep();
//     });
//   });
// });

// function stepA2(callback) {
//   console.log(new Date() + " : A2 작업 시작");
//   callback();
//   console.log(new Date() + " : A2 출력");
// }

// function stepB2(callback) {
//   console.log(new Date() + " : B2 작업 시작");
//   callback();
//   console.log(new Date() + " : B2 출력");
// }

// function stepC2(callback) {
//   console.log(new Date() + " : C2 작업 시작");
//   callback();
//   console.log(new Date() + " : C2 출력");
// }
// stepA2(() => {
//   stepB2(() => {
//     stepC2(() => {
//       finalStep();
//     });
//   });
// });

// // Promise를 반환하는 함수 1
// function stepA_Promise() {
//     return new Promise((resolve) => {
//         console.log(new Date() + " : A 작업 시작");
//         setTimeout(() => {
//             console.log(new Date() + " : A 출력");
//             resolve(); // 작업 성공 시 다음 .then으로 넘김
//         }, 1000);
//     });
// }

// // Promise를 반환하는 함수 2
// function stepB_Promise() {
//     return new Promise((resolve) => {
//         console.log(new Date() + " : B 작업 시작");
//         setTimeout(() => {
//             console.log(new Date() + " : B 출력");
//             resolve(); // 작업 성공 시 다음 .then으로 넘김
//         }, 1000);
//     });
// }

// // Promise를 반환하는 함수 3
// function stepC_Promise() {
//     return new Promise((resolve) => {
//         console.log(new Date() + " : C 작업 시작");
//         setTimeout(() => {
//             console.log(new Date() + " : C 출력");
//             resolve(); // 작업 성공 시 다음 .then으로 넘김
//         }, 1000);
//     });
// }

// function finalStep_Promise() {
//     console.log(new Date() + " : Success! 모든 비동기 작업 완료.");
// }

// // 메인 로직: Promise 체이닝을 사용하여 순차 실행
// stepA_Promise()
//     .then(() => stepB_Promise()) // A 완료 후 B 실행
//     .then(() => stepC_Promise()) // B 완료 후 C 실행
//     .then(() => finalStep_Promise()) // C 완료 후 최종 단계 실행
//     .catch((error) => {
//         console.error("오류 발생:", error); // 오류는 한 곳에서 처리
//     });

function sumOf1toMax(maxNumber) {
  let sum = 0;
  for (let i = 1; i <= maxNumber; i++) {
    sum += i;
  }
  return sum;
}

function myLateFunc(max) {
  setTimeout(() => {
    let a = sumOf1toMax(max);
    console.log(a);
  }, 2000);
}
myLateFunc(100);
myLateFunc(1000);
myLateFunc(10000);
myLateFunc(100000);

function myLateFuncPromise(max) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sum = sumOf1toMax(max);
      resolve(sum);
    }, 2000);
  });
}

myLateFuncPromise(100000)
  .then((suc) => {
    console.log(`성공값 : ${suc}`);
  })
  .catch(function (err) {
    console.error(`에러입니다 : ${err}`);
  })
  .finally(function () {
    console.log("완료했습니다.");
  });

/*
1단계 : 구구단 2단 출력
printGuGuDan2() { 
  2 * 1 = 2
  2 * 3 = 4
  ......
  2 * 8 = 16
  2 * 9 = 18
}

2단계 : callback 사용
doGuGuDan(printGuGuDan2); printGuGuDan2를 CallBack 실행
functoin doGuGuDan(callback) {
  setTimeout(구구단출력기능, 2초이후실행);
}

3단계 : Promise 사용
doGuGuDanPromise();
functoin doGuGuDanPromise() {
  return new Promise();
}

doGuGuDanPromise()
  .then(function() {
    console.log("성공");
  });

4단계 : async/await 사용

doGuGuDanAsyncAwait();
a... function doGuGuDanAsyncAwait() {
  a... doGuGuDanPromise();
  console.log("성공");
}
 */

function printGuGuDan2() {
  for (let i = 1; i <= 9; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
  }
}
// printGuGuDan2();

function doGuGuDan(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}
// doGuGuDan(printGuGuDan2);

function doGuGuDanPromise() {
  return new Promise((resolve) => {
    setTimeout(function () {
      printGuGuDan2();
      resolve();
    }, 2000);
  });
}
// doGuGuDanPromise().then(function() {
  // console.log("실행완료");
// })

async function doGuGuDanAsyncAwait() {
  await doGuGuDanPromise();
  console.log("성공");
}
doGuGuDanAsyncAwait();
