//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
//제일 어려운 문제 당첨 !

// 중복되는 키의 경우, 초기의 값을 사용합니다.
// 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// arr[i]의 길이가 0인 경우, 무시합니다.

//arr[0][0] =key , arr[0][1] = value
//1. map으로 이중배열을 풀어준다
//2. value를 객체로 먼저 만들어 준 다음,
//3. forloop으로 value의 key가 key의 인덱스와 같다면 key의 요소를 value에 key로 넣어준다. -> 실패!
//3-1 key를 맵으로 돌려 value의 key로 넣어준다 -> 실패!

// 내가 모르는 부분 key를 따로 넣어주는 방법을 못찾음, 이중배열 헷갈림

function convertListToObject(arr) {
  console.log(arr)
  let key = arr.map((el) => {
    return el[0];
  });
  console.log(key);

  let value = arr.map((el) => {
    return el[1];
  });
  console.log(value);

  // let objectValue = {...value};
  // console.log(objectValue);

  let result = {};

  //빈배열을 빈객체로 반환하는 조건식
  if (arr.length === 0) {
    return {};
  }
  //
  for (i = 0; i< value.length; i++) {
    if (result[key[i]] === undefined && arr[i].length > 0) {
      result[key[i]] = value[i];
    }
  } return result;
}




  //수도코드 
  //1. 빈배열을 선언한다
  //2. 해야할 것 이중배열의 첫번째 요소는arr[0][0] key 두번째 요소는 value arr[0][1]
  //2. forloop 으로 모든 경우의 수에 대해서 (arr.length > 0 이면서 중복되는 키가 없을 때) ??????
    // let result = {};
    // console.log(arr[1][0]);

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
    //     result[arr[i][0]] = arr[i][1];
    //   }
    // }

  //   return result;
  // }

  const arr = [
    ["make", "Ford"],
    ["model", "Mustang"],
    ["year", "1964"],
    ["make", "Bill"],
  ];

let output = convertListToObject(arr);

console.log(output); // -->
//   {
//     make : 'Ford'
//     model : 'Mustang',
//     year : '1964'
//   }

//객체 key 값 알아내는 방법
// var fruitsArr1 = ["Apple", "Orange", "Mango", "Banana"];
// var fruitsObj2 = { 0: "Apple", 4: "Orange", 2: "Mango", 3: "Banana"};
// var fruitsObj3 = { "id": "1", "name": "mango", "color": "yellow"};
// console.log(Object.keys(fruitsArr1));
// console.log(Object.keys(fruitsObj2));
// console.log(Object.keys(fruitsObj3));

//reference
// function convertListToObject(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
//         result[arr[i][0]] = arr[i][1];
//       }
//     }

//     return result;
//   }
