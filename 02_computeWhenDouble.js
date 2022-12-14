let output = computeWhenDouble(7);
console.log(output); // --> 11

function computeWhenDouble(interestRate) {
  let 이자율 = 1 + interestRate / 100;
  let 원금 = 1;
  let 년수 = 0;

  while (원금 < 2) {
    원금 = 원금 * 이자율;
    년수++;
  }
  return 년수;
}

//연이율을 입력받아 원금이 2배이상이 될때까지 걸리는 시간 (년) ?
//1. 연이율을 12로 나누어 원금에 더해준다
//2. 원금이 2배가 되면 그 값을 리턴
//3. for loop 사용을 한다면 i=원금 2가 될 때까지 돌자
//3. 연이율이 7퍼센트라면? 0.07 / 12

//reference

// function computeWhenDouble(interestRate) {
//     let 이자율 = 1 + interestRate / 100;
//     let 원금 = 1;
//     let 년도 = 0;
//     while (원금 < 2) {
//       원금 = 원금 * 이자율;
//       년도++;
//     }
//     return 년도;
//   }

// 슬쩍보고 다시 다시 수도코드 짜기
//0. 원금이 두배 이상이 될 때까지 걸리는 시간(년도)를 구해야 함, 이말은 = 이자가 원금만큼 되어야한다.
//1. 원금, 이자율, 년수 변수를 할당하고
//2. 원금에 이자율을 곱하면 이자가 됨
//3. 원금만큼 될 때 까지
//4. 년도를 ++ 해주자.

// 생각하지 못했던 부분
// 1. 반복문은 꼭 i가 필요 하지 않다! 무엇을 반복해 줘야 할지를 한번씩 다시 생각해 볼것
// 2. 0을 곱해주면 아무 소용이 없으므로. 1을 먼저 더해주고 계산해주어야 함
// 3. 헷갈리면 한국어 변수를 사용하자
