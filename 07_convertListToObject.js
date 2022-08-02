//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
//제일 어려운 문제 당첨 !

//arr[0][0] =key , arr[0][1] = value
//map으로 이중배열을 풀어준다
//value를 객체로 먼저 만들어 준 다음,
//value의 key가 key의 인덱스와 같다면 key의 요소를 value에 key로 넣어준다.

function convertListToObject(arr) {
  let key = arr.map((el) => {
    return el[0];
  });
  console.log(key);

  let value = arr.map((el) => {
    return el[1];
  });
  
  let objectValue = {...value};
  console.log(objectValue);

  let result = {};

  if (arr.length === 0) {
    return {};
  }

  for (let i =0; i< value.length; i++) {
    if (Object.keys(objectValue) === "i") {
        objectValue[i][0] = objectValue[value[i][0]]
    } 
  } return objectValue;
}

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
  



