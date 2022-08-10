//수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

//수도코드
//1. 제곱근은 뭐죠? -> 제곱하면 a가 되는 수를 a의 제곱근이라고 함
//2. 어떻게 구한담...
//3. 제곱근을 구하는 매소드 math.pow를 사용하자 -> 그리고 소수점을 떨궈주자
//4. Math.pow(base, exponent) ->base 에 exponent를 제곱한 값
//5. num의 제곱근을 구하는거니까, 

function computeSquareRoot(num) {
    
    return Number(Math.pow(num,0.5).toFixed(2));

  }
  

  let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45

console.log(Number(1.00))

//새롭게 알게 된 사실
//넘버 반환인데 스트링이라 Number() 씌워줬는데,
//Number()을 씌워주면, .00 -> 삭제해준다