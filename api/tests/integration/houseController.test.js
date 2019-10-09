const request = require('supertest');

const router = require('../../router');

const endpoint = '/api/house';

describe(endpoint, () => {
    test(`GET ${endpoint}`, async () => {
      const response = await request(router).get(endpoint);
      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
      expect(Array.isArray(response.body.data)).toBeTruthy();
      expect(response.body.data[0][0]._id).toBeDefined();
      expect(response.body.data[0][0].address).toBeDefined();
      expect(response.body.data[0][0].price).toBeDefined();
      expect(response.body.data[0][0].bedrooms).toBeDefined();
      expect(response.body.data[0][0].bathrooms).toBeDefined();
      expect(response.body.data[0][0].floorSpace).toBeDefined();
      expect(response.body.data[0][0].photo).toBeDefined();

      expect(typeof response.body.data[0][0].address).toEqual('string');
      expect(typeof response.body.data[0][0].price).toEqual('number');
      expect(typeof response.body.data[0][0].bedrooms).toEqual('number');
      expect(typeof response.body.data[0][0].bathrooms).toEqual('number');
      expect(typeof response.body.data[0][0].floorSpace).toEqual('number');
      expect(typeof response.body.data[0][0].photo).toEqual('string');

    });
  });