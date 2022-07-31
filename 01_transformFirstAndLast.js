let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
let output = transformFirstAndLast(arr);

function transformFirstAndLast(arr) {
  let firstElement = arr[0];
  console.log(firstElement);
  let lastElement;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      lastElement = arr[i];
    }
  }
  let newObj = {};
  newObj[firstElement] = lastElement;
  console.log(newObj);
  return newObj;
}

//아니 firstElement 왜 못읽어오는거지?!
//Key 값을 변수로 사용하는 방법 = 대괄호로 할당해준다
//newObj[firstElement] = lastElement;
