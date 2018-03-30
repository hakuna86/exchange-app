import insertSortingArr from '../App/lib/insertSortingArr';

describe('insertSortingArr 함수를 테스트 한다.', () => {
  it('함수의 파라메터 타입 테스트 String, String', () => {
    let testString = 'funtionTest';
    expect(() => {
      insertSortingArr(testString, testString, 'key');
    }).toThrow();
  });

  it('함수 파라메터 타입 테스트 Array, Object', () => {
    let testObject = {};
    let testArray = [];
    expect(Array.isArray(insertSortingArr(testArray, testObject, 'key'))).toBe(true);
  });

  it('정렬된 데이터를 넣고, 제대로된 위치에 삽입이 되는지 확인한다. <값이 처음, 중간에 위치>', () => {
    // 입력 객체의 price 프로퍼티를 이용하여 정렬하기 위해 속성에 price를 넣어서 데이터를 만든다.
    let testArray = [{price: 10}, {price: 30}, {price: 50}, {price: 75}, {price: 100}];
    let inputObject = {price: 45};
    let inputObject2 = {price: 5};
    // 정상적인 정렬이 수행되었을 경우에, price가 45인 값은 결과 배열의 2번재 index에 존재한다.
    expect(insertSortingArr(testArray, inputObject, 'price')[2].price).toEqual(45);
    expect(insertSortingArr(testArray, inputObject2, 'price')[0].price).toEqual(5);
  });

  it('정렬된 데이터를 넣고, 제대로된 위치에 삽입이 되는지 확인한다. <값이 제일 클때>', () => {
    // 입력 객체의 price 프로퍼티를 이용하여 정렬하기 위해 속성에 price를 넣어서 데이터를 만든다.
    let testArray = [{price: 10}, {price: 30}, {price: 50}, {price: 75}, {price: 100}];
    let inputObject = {price: 120};
    // 정상적인 정렬이 수행되었을 경우에, price가 120인 값은 결과 배열의 5번재 index에 존재한다.
    expect(insertSortingArr(testArray, inputObject, 'price')[5].price).toEqual(120);
  });
});
