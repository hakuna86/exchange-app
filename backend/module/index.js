module.exports = {
    makeArrayFromTextString : function(inputData) {
        let textToArr = inputData.split('\r');
        let newDataArr = textToArr.map((data) => {
          let arr = data.split('\t');
          //문자열 데이터를 숫자로 변환하여 객체를 만들어 리턴한다.
          return {
            type : arr[0],
            price : Number.parseInt(arr[1]),
            quantity : Number.parseInt(arr[2])
          };
        })
        return newDataArr;
      }
}