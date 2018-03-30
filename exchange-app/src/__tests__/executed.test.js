import executed from '../App/lib/executed';

describe('executed 함수를 테스트 한다.', () => {
  
  it('매수데이터가 들어왔을때, 매도리스트를 검색해서 가격이 작은것과 같은것이 리턴되는지 되고, 채결데이터를 제외한 배열이 리털되는지 확인한다.', () => {
    let inputData = { type : 'B', price : 5, quantity : 5 };
    let sellingList = [
      { type : 'S', price : 4, quantity : 3 },
      { type : 'S', price : 5, quantity : 1 },
      { type : 'S', price : 5, quantity : 3 },
      { type : 'S', price : 6, quantity : 7 }
    ];

    let result = [
      { type : 'S', price : 4, quantity : 3 },
      { type : 'S', price : 5, quantity : 2 }
    ];
    
    let afterSellingList = [
      { type : 'S', price : 5, quantity : 2 },
      { type : 'S', price : 6, quantity : 7 }
    ];

    expect(executed(inputData, sellingList)).toEqual({
      executedData : result,
      modifiedData : afterSellingList
    });
  });

  it('매도데이터가 들어왔을때, 매수리스트를 검색해서 가격이 작은것과 같은것이 리턴되는지 확인한다.', () => {
    let inputData = { type : 'S', price : 5, quantity : 5 };
    let buyList = [
      { type : 'B', price : 4, quantity : 3 },
      { type : 'B', price : 5, quantity : 1 },
      { type : 'B', price : 5, quantity : 1 },
      { type : 'B', price : 6, quantity : 7 }
    ];

    let result = [
      { type : 'B', price : 5, quantity : 2 },
      { type : 'B', price : 6, quantity : 3 }
    ];

    let afterBuyList = [
      { type : 'B', price : 4, quantity : 3 },
      { type : 'B', price : 6, quantity : 4 }
    ];
    
    expect(executed(inputData, buyList)).toEqual({
        executedData : result,
        modifiedData : afterBuyList
      });
  })

});