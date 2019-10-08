const request = require('supertest');

const router = require('../../api/router');

const endpoint = '/api/house';

describe(endpoint, () => {
    test(`GET ${endpoint}`, async () => {
      const response = await request(router).get(endpoint);
      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
      expect(Array.isArray(response.body.data)).toBeTruthy();

    });
  });