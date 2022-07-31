let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
let output = transformFirstAndLast(arr);

function transformFirstAndLast(arr) {
  let firstElement = arr[0];
  let lastElement = arr[arr.length];
  // console.log(firstElement);
  // let lastElement;
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === arr.length - 1) {
  //     lastElement = arr[i];
  //   }
  // }
  let newObj = {};
  newObj[firstElement] = lastElement;
  console.log(newObj);
  return newObj;
}

//아니 firstElement 왜 못읽어오는거지?!
//Key 값을 변수로 사용하는 방법 = 대괄호로 할당해준다
//newObj[firstElement] = lastElement;

//for loop을 사용하지 않아도 됐었다. -> 왜 쓴거죠..?


// reference

function transformFirstAndLast(arr) {
  let result = {};
  if (arr.length > 0) {
    result[arr[0]] = arr[arr.length - 1];
  }
  return result;
}
