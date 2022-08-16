//배열을 입력받아 그 길이를 리턴해야 합니다.

//배열의 요소만큼 1을 더해주자

function arrLength(arr) {
  if (arr.length === 0) return 0;

  const tail = arr.slice(1);
  return 1 + arrLength(tail);
}

let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4
