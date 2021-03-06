/**
 * 함수명 : executed ( data, refArr )
 * 매수가와 매도가를 이용하여, 체결데이터를 리턴한다.
 * @param data
 * @param refArr type array
 * return { 체결 데이터, 매도 매수 리스트 수정 인덱스와 수정할 값, 매도 매수 리스트에 넣을 값}
 */

 import margeValueToArr from './margeValueToArr';
 const executed = (data, refArr) => {
  let refArrCp = JSON.parse(JSON.stringify(refArr));
  let modifiedData =  JSON.parse(JSON.stringify(refArr));
   let result =  refArrCp.reduce((init, item, i) => {
     if(data.type === 'B'){
      if(item.price <= data.price){
        if(data.quantity >= item.quantity){
          if(data.quantity > 0){
            data = {...data, quantity : data.quantity - item.quantity };
            init.push(item);
            modifiedData[i].quantity = 0;
            //delete modifiedData[i];
          }
        }else{
          if(data.quantity > 0){
            modifiedData[i] = {...item, quantity : item.quantity - data.quantity };
            init.push({...item, quantity : data.quantity });
            data = {...data, quantity :  data.quantity -  data.quantity };
          }
        }
      }
     }else{
      if(item.price >= data.price){
        if(data.quantity >= item.quantity){
          if(data.quantity > 0){
            data = {...data, quantity : data.quantity - item.quantity };
            init.push(item);
            modifiedData[i].quantity = 0;
            //delete modifiedData[i];
          }
        }else{
          if(data.quantity > 0){
            modifiedData[i] = {...item, quantity : item.quantity - data.quantity };
            init.push({...item, quantity : data.quantity });
            data = {...data, quantity :  data.quantity -  data.quantity };
          }
        }
      }
     }
     return init
   }, []);

   let newModifiedData = modifiedData.filter((item, i) => {
     if(item.quantity !== 0){
       return item;
     }
   })

   return {
      inputData : data,
      executedData : margeValueToArr(result, 'price', 'quantity'),
      modifiedData : newModifiedData
   }
 }

 export default executed;