//문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.


//수도코드
//1. 띄어쓰기 2개를 하나로 줄인다
//2. 배열을 스트링으로 모아주기
function convertDoubleSpaceToSingle(str) {
    let result = str.split("   ").join(" ");
    console.log(result);
    return result;
  }
  
  let output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"