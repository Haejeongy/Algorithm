//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

function firstCharacter(str) {
  let eachLetter = str.split(" ");
  console.log(eachLetter); //배열로 들어있음
  let result = [];

  eachLetter.forEach((element) => {
    result.push(element[0]);
  }); return result.join("");
}

let output = firstCharacter("hello world");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"

//1. split('')를 사용해보자 -> 배열로 반환
//2. map을 써서 각 엘리먼트의 맨 앞자리만 result에 저장
//2-1 하려고 했으나, 맵을 빠져 나오면 마지막 요소만 저장이 되어있음(?)

//3. 다시 생각해서,
//3-1 split("")으로 각 요소를 잘라준다. -> 배열로 바뀌어서 저장 됨
//3-2 각 요소의 첫글자를 저장할 빈배열을 선언해주고
//3-3 foreach 배열 순회 해주고 result에 푸쉬해준다.
//3-4 푸쉬 끝난 후 배열을 스트링으로 바꿔주기 위해 join("") 매서드를 사용해서 공백도 없애주고 스트링으로도 만들어준다.