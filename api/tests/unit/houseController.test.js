const httpMocks = require('node-mocks-http');
const houseController = require("../../routes/house/houseController.js");


//const status = require('../mockData/status.json');

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe('houseController.geHouses', () => {
  test('should have a getHouses function', () => {
    expect(typeof houseController.getHouses).toBe('function');
  });

  it('should return 200 status code', () => {
    houseController.getHouses(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled).toBeTruthy();
  });

});