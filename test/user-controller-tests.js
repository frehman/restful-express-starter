const chai = require('chai'),
  chaiHttp = require('chai-http'),
  expect = chai.expect;

chai.use(chaiHttp);

describe('User controller tests', () => {
  describe('Get verb tests', () => {
    it('should return a list of items because db always has some data', done => {
      // prettier-ignore
      chai.request('http://localhost:5000')
        .get('/api/user')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(err).to.be.null;
            expect(res).to.be.json;
            expect(res.body[0].id).to.equal('1');
            done(); // <= Call done to signal callback end
        });
    });
  });
});
