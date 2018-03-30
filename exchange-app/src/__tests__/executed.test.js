import executed from '../App/lib/executed';

describe('executed 함수를 테스트 한다.', () => {
  
  it('리스트가 없을때, 데이터를 넣으면 빈 배열을 리턴하는지 확인', () => {
    let inputData = { type : 'B', price : 5, quantity : 5 };
    let sellingList = [];
    expect(executed(inputData, sellingList)).toEqual({
      executedData : [],
      modifiedData : []
    });
  });

  it('리스트에 하나의 값이 존재하고, 그 값이 입력값과 같을 때의 조건으로 결과값 확인', () => {
    let inputData = { type : 'B', price : 5, quantity : 5 };
    let sellingList = [{ type : 'S', price : 5, quantity : 5 }];
    expect(executed(inputData, sellingList)).toEqual({
      executedData : [ { type : 'S', price : 5, quantity : 5 } ],
      modifiedData : []
    });
  });
  
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