// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let string = "";
  for (let i = 0; i < alpha.length; i++) {
    if (str[i] === " ") {
      string = string + " ";
    } else {
      // 인덱스 값 찾는 변수 let
      찾기 = alpha.indexOf(str[i]) - secret;
      키 = 찾기 - secret
      찾기 < 0 ? (찾기 = alpha.length + 찾기) : 찾기;
      // - 10 ? // 26+(-10) // 10
      string = string + alpha[키];
    }
  }
  return string;
}

let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world
