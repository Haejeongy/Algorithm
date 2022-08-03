// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열

// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

// 대소문자를 구분하지 않습니다.
// 공백도 한 글자로 취급합니다.
// 'a'와 'b'는 중복해서 등장할 수 있습니다.

//수도코드
//1. str을 몽땅 소문자로 바꿔준다
//2. a보다 b보다 4칸 먼저 있거나, 
//3. b가 a보다 4칸 먼저 있어야 함

function ABCheck(str) {
  let findAB = str.toLowerCase();

  for(let i = 0; i<findAB.length; i++) {
    if (findAB[i] === "a" && findAB[i+4] === "b" || findAB[i] === "b" && findAB[i+4] === "a"){
      return true;
    }
  }return false;
}

let output = ABCheck("lane Borrowed");
console.log(output); // --> true

// const string = "haejeong"
// console.log(string[1])
