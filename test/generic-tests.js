const chai = require('chai'),
  chaiHttp = require('chai-http'),
  expect = chai.expect;
const path = require('path');
const dotEnvPath = path.resolve('./.env');

if (dotEnvPath) {
  console.log('dotEnvPath');
  require('dotenv').config({ path: dotEnvPath });
}
process.env.TEST = true;

const app = require('../app');

chai.use(chaiHttp);

describe('Generic tests', () => {
  it('should load app correctly', done => {
    // prettier-ignore
    chai.request(app)
        .get('/')
        .end(function(err, res) {
            expect(err).to.be.null;            
            expect(res.text).to.contain('Hello World API.');
            done();
        });
  });
  it('should load records correctly', done => {
    // prettier-ignore
    chai.request(app)
        .get('/api/user')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(err).to.be.null;
            expect(res).to.be.json;
            done();
        });
  });
});
