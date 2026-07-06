class ArrayTest {
  #users = [
    {
      id: 1,
      name: "김철수",
      age: 28,
      active: true,
      scores: [90, 85, 88],
      role: "admin",
    },
    {
      id: 2,
      name: "이영희",
      age: 17,
      active: false,
      scores: [70, 75, 95],
      role: "user",
    },
    {
      id: 3,
      name: "박민수",
      age: 34,
      active: true,
      scores: [88, 92, 78],
      role: "user",
    },
    {
      id: 4,
      name: "최지연",
      age: 22,
      active: true,
      scores: [95, 88, 91],
      role: "moderator",
    },
    {
      id: 5,
      name: "정우성",
      age: 45,
      active: false,
      scores: [60, 65, 70],
      role: "user",
    },
  ];

  testFor() {
    let sum = 0;
    for (let i = 0; i < this.#users.length; i++) {
      sum += this.#users[i].age;
      console.log("for : " + JSON.stringify(this.#users[i]));
    }
    console.log(sum);

    sum = 0;
    this.#users.forEach((user, ndx) => {
      sum += user.age;
      console.log("forEach : " + JSON.stringify(user));
    });
    console.log(sum);
  }

  printNameAgeWithActiveTrue() {
    // for (let n = 0; n < this.#users.length; n++) {
    for (const node of this.#users) {
      // if (this.#users[n].active === true) {
      if (node.active === true) {
        console.log(
          `printNameAgeWithActiveTrue for : ${node.name}, ${node.age}`
        );
      }
    }

    this.#users.forEach((user, ndx) => {
      if (user.active === true) {
        if (user.active === true) {
          console.log(
            `printNameAgeWithActiveTrue forEach : ${user.name}, ${user.age}`
          );
        }
      }
    });
  }

  printNameScoresRoleEqualUser() {
    // for of 로 배열 요소를 user.role 이 "user" 인것을 찾아서 출력한다.
    // 배열의 forEach 함수로 배열 요소를 user.role 이 "user" 인것을 찾아서 출력한다.
  }

  testMap() {
    // 이름만 추출
    let arr1 = this.#users.map((u) => u.name);
    console.log(arr1);
    // → ["김철수", "이영희", "박민수", "최지연", "정우성"]

    // 나이를 1살씩 더해서 새 객체 만들기
    let arr2 = this.#users.map((u) => ({ ...u, age: u.age + 1 }));
    console.log(arr2);

    console.log(this.#users);
  }

  testMap3() {
    console.log("문제3");
    // 문제3
    // this.#users 배열의 모든원소에서 원소의 이름과 active [{name:"홍길동", active:true}, {name, active}, {name, active}, ...]를 새로운 배열로 추출하세요. 출력
    let arr1 = this.#users.map((u) => {
      return { name: u.name, active: u.active };
    });
    console.log(arr1);

    // this.#users 배열의 모든원소에서 [{ 기존 속성은 그대로, sum : scores 의 총합}, { 기존 속성은 그대로, sum : scores 의 총합}, { 기존 속성은 그대로, sum : scores 의 총합}, ... ] 을 새로운 배열로 추출하세요. 출력
    let arr2 = this.#users.map((u) => {
      let sumScores = 0;
      u.scores.forEach((x) => {
        sumScores += x;
      });
      return { ...u, sum: sumScores };
    });
    console.log(arr2);
  }

  testMap4() {
    // 문제4
    console.log("문제4");
    // this.#users 배열의 모든원소에서 role 속성의 값 "user"/"admin" 을 원소로 하는 ["user", "admin", ...] 배열을 추출하고 출력.
    let arr1 = this.#users.map(function (user) {
      if (user.role === "user") {
        return user.role;
      }
    });
    console.log(arr1);
    // this.#users 배열의 모든원소에서 {id: ?, name: "???", age: ?,} 을 원소로 하는 [{}, {}, {}, ...] 새로운 배열을 추출하고 출력.
    let arr2 = this.#users.map((item) => {
      return { id: item.id, name: item.name, age: item.age };
    });
    console.log(arr2);
  }

  testMap5() {
    console.log("문제5");
    let array05 = [
      "홍길동",
      "이순신",
      "신사임당",
      "Micheal Jackon",
      "을지문덕",
    ];
    console.log(array05.length);
    console.log("신사임당".length);
    // 문제5
    // array05 배열을 이용하여 [{name:"홍길동", len:3}, ...., {name:"Micheal Jackon", len:14}, {name:"을지문덕", len:4}]
    // {name:문자열값, len:문자열값의길이} 원소의 배열로 추출하고 출력
    let newArray = array05.map((item) => {
      return { name: item, len: item.length };
    });
    console.log(newArray);
  }

  testFilter1() {
    console.log("testFilter1");
    // 활성화된 사용자만
    let arr3 = this.#users.filter((u) => {
      return true;
    });
    console.log(arr3);

    // 30살 이상인 사람
    let arr4 = this.#users.filter((u) => false);
    console.log(arr4);

    // 관리자 또는 모더레이터
    let arr5 = this.#users.filter((u) =>
      ["admin", "moderator"].includes(u.role)
    );
    console.log(arr5);
  }

  testFilter2() {
    console.log("testFilter2");
    // 문제6
    // this.#users 배열의 원소들 중에서 active 가 true 이고 나이가 25살 이상인 객체를 새로운 배열에 추출해서 출력.
    let arr1 = this.#users.filter((매개변수) => {
      return true;
    });
    console.log(arr1);
    // this.#users 배열의 원소들 중에서 scores 점수 평균이 90점 이상인 객체를 새로운 배열에 추출해서 출력
    let arr2 = this.#users.filter((매개변수) => {
      // let avg = 0, sum = 0;
      // for( const number of 매개변수.scores) {
      // }
      // 매개변수.scores.forEach((number) => {
      // });
      return true;
    });
    console.log(arr2);
  }

  testReduce1() {
    console.log("testReduce1");
    let arr2 = this.#users.map((u) => {
      let sumScores = 0;
      u.scores.forEach((x) => {
        sumScores += x;
      });
      return { ...u, sum: sumScores };
    });
    console.log(arr2);
    // 위에서 sum 을 직접 forEach 로 합계를 구함

    let arr3 = this.#users.map((u) => {
      return { ...u, sum: u.scores.reduce((sum, number) => sum + number, 0) };
    });
    console.log(arr3);

    let names = this.#users.reduce((str, u, i) => {
      let temp = str + (i > 0 ? ", " : "") + u.name;
      return temp;
    }, "");
  }

  testChain() {
    console.log("testChain");
    // 다양한 메서드를 조합한 복잡한 데이터 처리
    const products = [
      {
        id: 1,
        name: "노트북",
        category: "전자제품",
        price: 1500,
        stock: 5,
        rating: 4.5,
      },
      {
        id: 2,
        name: "마우스",
        category: "전자제품",
        price: 25,
        stock: 0,
        rating: 4.2,
      },
      {
        id: 3,
        name: "키보드",
        category: "전자제품",
        price: 80,
        stock: 10,
        rating: 4.7,
      },
      {
        id: 4,
        name: "의자",
        category: "가구",
        price: 300,
        stock: 3,
        rating: 4.3,
      },
      {
        id: 5,
        name: "책상",
        category: "가구",
        price: 500,
        stock: 2,
        rating: 4.6,
      },
      {
        id: 6,
        name: "모니터",
        category: "전자제품",
        price: 400,
        stock: 7,
        rating: 4.4,
      },
    ];

    // 전자제품 카테고리에서 재고가 있고, 평점 4.4 이상인 제품의
    // 이름과 가격만 추출하여 가격순으로 정렬
    const result = products
      .filter((product) => product.category === "전자제품" && product.stock > 0 && product.rating >= 4.4)
      .map((product) => ({
        name: product.name,
        price: product.price,
        value: ((product.rating / product.price) * 1000).toFixed(2), // 가격 대비 평점
      }))
      .sort((a, b) => a.price - b.price);

    console.log(result);
    /*
[
  { name: '키보드', price: 80, value: '58.75' },
  { name: '모니터', price: 400, value: '11.00' },
  { name: '노트북', price: 1500, value: '3.00' }
]
*/

    // 문자열 처리 예제
    const sentences = [
      "JavaScript is awesome",
      "I love programming",
      "Web development is fun",
      "Code every day",
    ];

    // 모든 문장을 단어로 분리하고, 중복 제거 후 정렬
    const uniqueWords = sentences
      .flatMap((sentence) => sentence.toLowerCase().split(" "))
      .map((word) => word.replace(/[^a-z]/g, "")) // 특수문자 제거
      .filter((word) => word.length > 2) // 2글자 초과만
      .reduce((acc, word) => {
        if (!acc.includes(word)) {
          acc.push(word);
        }
        return acc;
      }, [])
      .sort();

    console.log(uniqueWords);
    // ['awesome', 'code', 'day', 'development', 'every', 'fun', 'is', 'javascript', 'love', 'programming', 'web']
  }
}

let at = new ArrayTest();
at.testFor();
["a", "b", "cd", "ef"].forEach((x) => console.log(x));

// 문제1 : active 가 true 인 user 의 이름과 나이를 출력하세요.
at.printNameAgeWithActiveTrue();

// 문제2 : role 이 "user" 인 user 의 이름과 scores 를 출력하세요.
at.printNameScoresRoleEqualUser();

at.testMap();

at.testMap3();

at.testMap4();

at.testMap5();

at.testFilter1();

at.testFilter2();

at.testReduce1();

at.testChain();