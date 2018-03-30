/**
 * 함수명 : executed ( data, refArr )
 * 매수가와 매도가를 이용하여, 체결데이터를 리턴한다.
 * @param data
 * @param refArr type array
 * return { 체결된 데이터, 값이 수정된 배열 }
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
            delete modifiedData[i];
          }
        }else{
          if(data.quantity > 0){
            modifiedData[i] = {...item, quantity : item.quantity - data.quantity };
            init.push({...item, quantity : data.quantity });
          }
        }
      }
     }else{
      if(item.price >= data.price){
        if(data.quantity >= item.quantity){
          if(data.quantity > 0){
            data = {...data, quantity : data.quantity - item.quantity };
            init.push(item);
            delete modifiedData[i];
          }
        }else{
          if(data.quantity > 0){
            modifiedData[i] = {...item, quantity : item.quantity - data.quantity };
            init.push({...item, quantity : data.quantity });
          }
        }
      }
     }
     return init
   }, []);

   let filterModifyData = modifiedData.filter((item) => {
     if(item){
       return item;
     }
   })

   return {
     executedData : margeValueToArr(result,'price', 'quantity'),
     modifiedData : filterModifyData
   };
 }

 export default executed;