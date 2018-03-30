process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../index');

chai.use(chaiHttp);

describe('GET test', function(){
    it('Route /', function(done) {
        chai.request(server)
          .get('/')
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });
})