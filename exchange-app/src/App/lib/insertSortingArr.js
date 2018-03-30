
/**
 * 함수명 : insertSortingArr
 * 정렬된 배열에 아이템을 삽입하여 새로운 배열을 리턴한다. ( 이미 정렬된 배열에 새로운 아이템의 크기를 비교해서 넣는 알고리즘으로 구현 )
 * @param arr : 정렬된 값이 존재하는 배열 (type : Array)
 * @param item : 정렬된 배열에 삽입할 데이터 (type : Object)
 * @param key : '정렬을 기준으로할 객체의 속성명'
 * return type Array
 */
const insertSortingArr = (arr, item, key) => {
  if (!Array.isArray(arr) || !item) {
    throw new TypeError('파라메타의 타입이 맞지 않거나, 파라메터가 없음');
  }
  //배열의 경우 참조형이므로 함수 내부에서 변경한 데이터가 원본데이터 까지 영향을 끼치므로, deepcopy를 사용한다.
  let newArr = JSON.parse(JSON.stringify(arr));
  if (newArr.length === 0) {
    newArr.push(item);
  } else {
    if (newArr[newArr.length - 1][key] < item[key]) {
      newArr.push(item);
    } else {
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][key] > item[key]) {
          newArr.splice(i, 0, item);
          break;
        }
      }
    }
  }
  return newArr;
};

export default insertSortingArr;