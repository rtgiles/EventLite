var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();
var assert = chai.assert;

chai.use(chaiHttp);

describe('Server Running', function() {
  it('Should output 200', function(done) {
    chai.request(server)
      .get('')
      .end(function(err, res){
        assert.equal(res.status, 200)
        done();
      });
  })
});