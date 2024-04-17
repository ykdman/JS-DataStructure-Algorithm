function same_mine(arr1, arr2) {
  arr2.sort((a, b) => a - b);
  const squareArr = arr1.map((x) => Math.pow(x, 2)).sort((a, b) => a - b);
  squareArr.forEach((i, idx) => {
    if (i !== arr2[idx]) {
      console.log(false);
      return;
    }
    console.log(true);
  });
}

// same_mine([1, 2, 1], [4, 4, 1]);

// teacher's solution
function same_solution(arr1, arr2) {
  // 갯수가 일치하지 않으면 아예 false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 1번째 배열을 순회하면서 조회
  for (let i = 0; i < arr2.length; i++) {
    // 1번째 배열의 제곱 값을 가진 arr2의 인덱스를 찾는다.
    let correctIndex = arr2.indexOf(Math.pow(arr1[i], 2));
    // 반환된 인덱스가 -1 일때 false
    if (correctIndex === -1) {
      return false;
    }
    // 정상 인덱스 반환시 인덱스 기준으로 값을 하나씩 제거 한다.
    arr2.splice(correctIndex, 1);
  }
  // 최종 true 반환
  return true;
}

same_solution([1, 2, 1], [4, 4, 1]);
