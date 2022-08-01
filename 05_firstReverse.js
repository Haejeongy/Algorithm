// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

function firstReverse(str) {
  let result = [];
  let newResult = "";
  result = str.split("");
  console.log(result);
  newResult = result.reverse();
  return newResult.join("");
}

let output = firstReverse("codestates");
console.log(output); // "setatsedoc"

// output = firstReverse("I love codestates");
// console.log(output); // "setatsedoc evol I"

//1.str을 배열로 만들어준다
//2.배열에 reverse매서드를 쓴다
//3.join으로 다시 string으로 바꿔준다

//split(" ") -> 각단어 단어로
//split("")-> 각문자 문자로
