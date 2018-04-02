import * as types from '../actions/ActionTypes';
import insertSortingArr from '../App/lib/insertSortingArr';

const initialState = {
  sellingList : [],
  buyList : [],
  executedList : []
};

const exchangeReducer = (state = initialState, action) => {
  const {sellingList, buyList } = state;
  switch (action.type) {
    case types.MODIFY_SELLING_DATA:
      return {
        ...state,
        sellingList : [...action.payload.modifyArray]
      }
    case types.MODIFY_BUY_DATA:
      return {
        ...state,
        buyList : [...action.payload.modifyArray]
      }
    case types.GET_BUY_DATA:
      return {
        ...state,
        buyList : [...insertSortingArr(buyList, action.payload, 'price')]
      }
    case types.GET_SELLING_DATA:
      return {
        ...state,
        sellingList : [...insertSortingArr(sellingList, action.payload, 'price')]
      }
    case types.EXECUTE:
      return {
        ...state,
        executedList : [...action.payload.executedData]
      }
    default:
     return state;
  }
}

export default exchangeReducer;