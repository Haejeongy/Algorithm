//다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

//수도코드
//스프레드로 배열을 계속 푸는데
//빈배열이 되면 빈배열로 리턴을 해주고,
//head가 배열이라면, 풀어서 재귀를 돌리고-> flattenArr([...head, ...tail])
//head가 배열이 아니라면, 배열을 씌워서 concat으로 나머지 tail을 붙여준다.

function flattenArr(arr) {
    if(arr.length === 0) {return []}

    const head = arr[0]
    const tail = arr.slice(1)

    if(Array.isArray(head)) {
        return flattenArr([...head, ...tail])
    }else {
        return [head].concat(flattenArr(tail));
    }

  }
  



  let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]