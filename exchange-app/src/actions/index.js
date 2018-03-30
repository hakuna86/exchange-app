import * as types from './ActionTypes';
import executed from '../App/lib/executed';

export const getSellingData = (sellingData) => {
  return {
    type : types.GET_SELLING_DATA,
    payload : sellingData
  }
}

export const getBuyData = (buyData) => {
  return {
    type : types.GET_BUY_DATA,
    payload : buyData
  }
};

export const execute = (data, refArr) => {
  let result = executed(data, refArr);
  return {
    type : types.EXECUTE,
    payload : {
      type : data.type,
      executedData : result.executedData,
      modifiedData : result.modifiedData
    }
  }
};