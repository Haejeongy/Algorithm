//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

// arr, arr[i]의 길이는 다양하게 주어집니다.
// 항상 한 개의 문자열 'B'가 존재합니다.


// 수도코드
// 1.이중배열해서 B

function findBugInApples(arr) {
    console.log(arr);
}

  output = findBugInApples([
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'B', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
  ]);
  console.log(output); //[1, 1]
  