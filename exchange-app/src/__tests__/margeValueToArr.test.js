import margeValueToArr from '../App/lib/margeValueToArr';

describe('margeValueToArr function test, 정렬이된 데이터를 이용해서 결과값을 정리한다.', () => {
  it('함수의 파라메터의 형식이 다를때 체크 하는지 확인', () => {
    let parm = 'helloString';
    expect(() => {
      margeValueToArr(parm, 'price', 'quantity');
    }).toThrow();
  });

  it('함수의 파라메터에 배열을 전달 했을때, 배열이 리턴되는것을 확인', () => {
    let paramArray = [{price: 1}, {price: 2}, {price: 3}, {price: 4}, {price: 5}];
    expect(Array.isArray(margeValueToArr(paramArray, 'price', 'quantity'))).toBe(true)
  });

  it('배열의 속성값중 price가 동일할때, 아이템의 수량을 합쳐서 리턴 하는지 확인', () => {
    let paramArray = [
      { type: 'S', price: 100, quantity: 50 },
      { type: 'S', price: 100, quantity: 50 },
      { type: 'S', price: 100, quantity: 50 }
    ];
    let result = [{ type: 'S', price: 100, quantity: 150 }];
    expect(margeValueToArr(paramArray, 'price', 'quantity')).toEqual(result);
  });

  it('배열의 속성값중 price가 동일할때, 아이템의 수량을 합쳐서 리턴 하는지 확인 2', () => {
    let paramArray = [
      { type: 'S', price: 100, quantity: 50 },
      { type: 'S', price: 100, quantity: 50 },
      { type: 'S', price: 110, quantity: 50 }
    ];
    let result = [
      { type: 'S', price: 100, quantity: 100 },
      { type: 'S', price: 110, quantity: 50 }
    ];
    expect(margeValueToArr(paramArray, 'price', 'quantity')).toEqual(result);
    expect(paramArray).toEqual([
      { type: 'S', price: 100, quantity: 50 },
      { type: 'S', price: 100, quantity: 50 },
      { type: 'S', price: 110, quantity: 50 }
    ]);
  });
});
