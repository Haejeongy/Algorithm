//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
  let result = [];
  let newStr = str.split(" ");
  console.log(newStr);

  newStr.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] !== element[0]) {
        result = result + element[i];
      }
    }
    result = element[0].toUpperCase();
    console.log(result);
    
  });
  return result;
}

let output1 = letterCapitalize("hello world");
console.log(output1); // "Hello World"
// let output2 = letterCapitalize("javascript  is sexy ");
// console.log(output2); // "Javascript  Is Sexy "

//수도코드
//0. result 빈문자열 선언
//1. str을 한단어 한단어 나눠서 배열에 저장한다
//2. 배열안의 요소를 돌며
//2-1. 0번째 인덱스라면 대문자로 바꾸어주어 푸쉬,
//2-2. 그 외의 인덱스라면 소문자로 바꾸어 푸쉬,

//push, join이 안먹는데 왜지..? 아놔

//reference 

function letterCapitalize(str) {
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }

  str = words.join(' ');
  return str;
}



//substring() 메서드
//.substring(자르고 싶은 인덱스 숫자 시작, 끝 (자기포함x)) 
//매개변수가 하나라면 그 인덱스부터 
//잘라진 부분만 반환

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
