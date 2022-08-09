//두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.

// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 어떤 수로 나누어도 나머지가 0입니다.
// 어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.

//수도코드
//1. num1을 num2로 나눈다는 것은 num1을 더이상 나누어지지 않을 때까지 뺀다는 뜻
//2. 반복문 num1 < num2 까지 작성 while문이 쉬울수도?
//3. 계속 재할당해주는 변수 선언 필요
//4. 더이상 나누어지지 않을 때 리턴
//5. 0일 때 나머지 처리

function modulo(num1, num2) {
  let result = 0;
  console.log(num1);

  for (let i = num2; i > 0; i = num2 + i) {
    result = num1 - i;
    if (result > 0 && result < num2) {
      console.log(result);
      return result;
    } else if (result === 0) {
      return "Error: cannot divide by zero";
    }
  }
}

let output = modulo(25, 4);
console.log(output); // --> 1
