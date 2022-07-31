//수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

function powerOfTwo(num) {
  let result = 0;
  if (num === 1) {
    return true;
  }
  for (let i = 1; i < num; i = i * 2) {
    result = num / i;
  }
  if (result % 2 === 0) {
    return true;
  }
  return false;
}

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false

//수도코드
//1. 2의 거듭제곱 2,4,16,32,64,128,256
//2. 2의 제곱은 2로 계속 나누면 깔끔하게 나눠진다!!

