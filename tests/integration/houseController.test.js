const request = require('supertest');

const router = require('../../api/router');
const status = require('../mockData/houseData.json');

const endpoint = '/api/house';

describe(endpoint, () => {
    test(`GET ${endpoint}`, async () => {
      const response = await request(router).get(endpoint);
      //const { status: statusValue } = status;
  
      expect(response.statusCode).toBe(200);
     // expect(response.body.data).toBeDefined();
     // expect(Array.isArray(response.body.data)).toBeTruthy();
     // expect(response.body.data[0].status).toBeDefined();
     // expect(response.body.data[0].status).toStrictEqual(statusValue);
    });
  });