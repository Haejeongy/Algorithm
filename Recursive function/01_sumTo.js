//수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.

function sumTo(num) {
    //base
    if(num === 0) {
        return num}
    //recursive
    return num+sumTo(num-1);
  }



  let output = sumTo(10);
console.log(output); // --> 55


