//다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

//수도코드
//결과값을 할당 할 빈배열을 하나 선언해주고,
//반복문을 돌면서 첫번째 요소가 배열이면 재귀함수에 첫번째 요소를 넣어서 
// 풀어서 푸쉬로 넣어주고
// 아니며 그냥 푸쉬해준다

function flattenArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flattend = flattenArr(arr[i]);
      console.log(flattend)
      result.push(...flattend);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]
