//문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

//0은 짝수로 간주합니다.

//수도코드 1
//1.반복문 앞자리가 홀수면 대쉬를 붙인다
//2.앞자리가 홀수이고, 본인도 홀수인것은 대쉬를 붙이고, 아니면 그냥 리턴
//2.근데 이제 마지막에는 안붙인다 -> 이걸 어떻게 하지? ->맨마지막 문자 뗴는 매서드 뭐지? slice

function insertDash(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] % 2 === 1 && str[i] % 2 === 1) {
      result = result + "-" + str[i];
    } else {
      result = result + str[i];
    }
  }
  return result;
}

let output = insertDash("454793");
console.log(output); // --> 4547-9-3

//result가 재할당이 안되면 계속 새로운 값만 저장되므로, 그부분을 유의하자
