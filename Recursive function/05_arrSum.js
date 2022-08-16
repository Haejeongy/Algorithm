//배열을 입력받아 모든 요소의 합을 리턴해야 합니다.

//head는 배열의 첫요소
//tail은 tail이 제거 되고 남은 요소
//계속 제거되는 식으로 재귀를 돌릴 수 있겠군



function arrSum(arr) {
    if(arr.length === 0) {
        return 0
    }

    const head = arr[0];
    const tail = arr.slice(1);
    
    return head+arrSum(tail);

  }


  let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1

// const head = arr[0];
// const tail = arr.slice(1);
// return head + arrSum(tail);

// -1+[-2,1,3]
//-1+(-2) +[1,3]
//-1+(-2)+(1) +[3]
//-1+(-2)+1+3 + []