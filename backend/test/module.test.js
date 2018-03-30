const assert = require('assert');
const util = require('../module/index');

describe('util의 makeArrayFromTextString(inputData) 테스트', function() {
    // 문자열 s\t101\t500\n s\t101\t500\n ... 형태의 데이터를 받아서 array로 변환후 리턴한다.
    it('테스트 문자열열을 inputData에 할당한다.', function() {
        let testString = "S\t101\t500\rS\t101\t500\rB\t101\t500";
        let result = util.makeArrayFromTextString(testString);
        let expactedResult = [
            {type : 'S', price : 101, quantity : 500 },
            {type : 'S', price : 101, quantity : 500 },
            {type : 'B', price : 101, quantity : 500 }
        ];
        //object는 참조형이며, object를 직접 비교시 false이므로 문자열로 결과값을 비교한다.
        assert.equal(JSON.stringify(expactedResult), JSON.stringify(result));
    })
})