const mongoose = require('mongoose');
const House = require('./houseModel');


exports.getAllHouses = async () => {
    try {
      return await House.find();
    } catch (err) {
      throw err;
    }
  };