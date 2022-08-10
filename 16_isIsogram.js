//문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

//수도코드
//1. 일단 모두 소문자로 바꿔준다
//2. 중복 찾는 방법 IndexOf() 로 반복문의 i와 같은것만 저장해주면 중복이 제거가 됨
//3. indexof 에서 i 와 같지 않은 것이 있다면 false,
//4. 아니면 true

function isIsogram(str) {
  const arr = [...str];
  console.log(arr.length); //중복값 제거 전의 배열
  const set = new Set(arr); //중복값을 허용하지 않는 생성자 함수
  console.log(set.size); //중복값을 제거해준 후의 객체

  if(Number(arr.length) === Number(set.size)) {
    return true} else {
      return false;
    }

  }

  output = isIsogram('dropOut');
  console.log(output); // true
  



  // let smallLetter = str.toLowerCase();
  // console.log(smallLetter[0]);
  // console.log(smallLetter.indexOf(smallLetter[]))
  // let result = "";

  // for (let i = 0; i < smallLetter.length; i++) {
  //   if (smallLetter.indexOf(smallLetter[i]) === i) { //sml.indexof(sml[0])->
  //     result = result + i;
  //   //   console.log(result);
  //   }
  // }
  // console.log(result.length);
  // if (result.length >= 0) false;
  // else true;


  // 왜 인덱스오브를 쓰려고 했나?
  // 중복된 값만 새로운 변수에 담아서 변수에 값이 있으면 => 중복 된 문자가 있으므로 false를 반환하고 아니면 true를 반환하려고 했는데
  // i는 0부터 차례대로 length값 만큼 증가하면서 각 자릿수를 돌고,
  // indexOf가 반환하는 자릿수와 i와 비교해서 같은 자릿수가 있다면 => ??? 잠깐
  // 그런데 생각해보니, 똑같은 자릿수가 두번 나왔을 때 저장을 해줘야 하는건데? 오 완전.. 완전 잘못 생각했다.
