//수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

//수도코드
//0.새로운 빈 숫자 선언
//1.배열의 길이 마지막보다 하나 작은 수까지 모든 요소를 더한다
//2.배열의 마지막 요소와 비교해보고 크면 true/ 작으면 false
function superIncreasing(arr) {
  let result = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    result = result + arr[i];
    console.log(result);
  }
  if (result < arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}

let output = superIncreasing([-2247, 1093, 1064]);
console.log(output); // --> true

//arr[arr.length] 는 왜 안되는가?
//arr.length는 index보다 값보다 항상 -1이다. 
//arr[_] 에 들어가는 값은 인덱스 값이므로 렝스에 -1을 해줘야한다 
