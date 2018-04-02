import * as types from './ActionTypes';
import executed from '../App/lib/executed';

// 서버에서 데이터를 받으면, 수정 -> 삽입 순으로 처리한다. 이유 : 기존 정렬된 데이터에서 먼저 삽입하면 인텍스가 바뀌기 때문...
export const executeAndDataController = (data, props) => {
  return (dispatch) => {
    let result = data.type === 'S'? executed(data, props.buyList) : executed(data, props.sellList);
    result.executedData.length > 0 && dispatch(execute(result.executedData));
    if(result.inputData.type === 'S'){
      dispatch(modifyBuyData(result.modifiedData)); // 매도데이터를 입력할때, 매수 리스트 수정
      result.inputData.quantity !== 0 && dispatch(getSellingData(result.inputData));
    }else{
      dispatch(modifySellingData(result.modifiedData)); // 매수데이터를 입력할때, 매도 리스트 수정
      result.inputData.quantity !== 0 && dispatch(getBuyData(result.inputData));
    }
  }
};

export const getSellingData = (sellingData) => {
  return {
    type : types.GET_SELLING_DATA,
    payload : sellingData
  }
};

export const getBuyData = (buyData) => {
  return {
    type : types.GET_BUY_DATA,
    payload : buyData
  }
};

export const execute = (executedData) => {
  return {
    type : types.EXECUTE,
    payload : {
      executedData : executedData
    }
  }
};

export const modifySellingData = (sellDataArr) => {
  return {
    type : types.MODIFY_SELLING_DATA,
    payload : {
      modifyArray : sellDataArr
    }
  }
}

export const modifyBuyData = (buyDataArr) => {
  return {
    type : types.MODIFY_BUY_DATA,
    payload : {
      modifyArray : buyDataArr
    }
  }
}