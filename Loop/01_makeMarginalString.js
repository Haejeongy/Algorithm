//문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다

//수도코드
//1. 이중반복문을 쓴다
//1-1. abc를 도는데 하나씩 돌때마다 이중반복문 한번씩 더 돈다.

function makeMarginalString(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      result = result + str[j];
    }
  }
  return result;
}

let output = makeMarginalString("abc");
console.log(output); // --> 'aababc'

output = makeMarginalString("flower");
console.log(output); // --> 'fflfloflowfloweflower'

output = makeMarginalString("");
console.log(output); // --> ''
