/**
 * 함수명 : margeValueToArr(arr, key, addKey)
 * 가격순으로 정렬된 리스트를 파라메터로 받아, 각 인텍스 값중 pirce가 같은 것을 찾아 수량을 합친후 배열을 리턴한다.
 * @param arr type 'Array'
 * @param key type 'String' : 비교할 배열 내부 아이템의 객체의 key
 * @param addKey type 'String' : 배열에 내부 아이템에 반영할 객체의 key
 * return type Array
 */
const margeValueToArr = (arr, key, addKey) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('파라메터 형식이 올바르지 않습니다. Array');
  }
  let list = JSON.parse(JSON.stringify(arr));
  return list.reduce((a, b) => {
    if(!a.slice(-1)[0]){
      a.push(b);
    }else{
      if(a.slice(-1)[0][key] === b[key]){
        a.slice(-1)[0][addKey] += b[addKey];
      }else{
        a.push(b);
      }
    }
    return a;
  }, []);
};

export default margeValueToArr;
