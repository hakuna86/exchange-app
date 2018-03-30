const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const fs = require('fs');
const util = require('./module/index');

//text 파일을 읽어서, 배열로 만든다.
const inputData = fs.readFileSync(__dirname+'/data/input.txt', 'utf8');
let arrData = util.makeArrayFromTextString(inputData);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

io.on('connection', function (socket) {
  let index = 0;
  let intervalId = null;
  intervalId = setInterval(() => {
    if(index < arrData.length){
      //JSON 형태로 변환하여 데이터를 보냄
      socket.emit('exchageData', arrData[index]);
      index += 1;
    }else{
      // 데이터 갯수 이상이면 종료
      clearInterval(intervalId);
    }
  }, 1000);
});

server.listen(5000, function () {
  console.log('listen 5000port');
});

module.exports = app;