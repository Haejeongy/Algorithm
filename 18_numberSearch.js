// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.

//수도코드
//1.문자열에서 숫자 찾아내기 -> 정규표현식으로 숫자 뽑아냄
//2. 그 숫자를 모두 더함
//3. 랭스와 나눠줌

function numberSearch(str) {
  let newNum = str.replace(/[^0-9]/g ,"");
  let newString = str.replace(/[^a-z]/gi ,"");
  console.log(newNum);
  let sum = 0;
  let result = 0;
    console.log(newString);

  for(let i=0; i<newNum.length; i++) {
    sum = sum+Number(newNum[i]);
    console.log(sum);
  }
  if(sum > 0) {
    result = sum/newString.length;
    console.log(result);
}
return Math.round(result);

}

output = numberSearch( "Sou2bgPJkS7Lp5r2j6jeWOts8X");
console.log(output); // 

//스트링은 str[i]가 가능하지만 number type 은 불가능
