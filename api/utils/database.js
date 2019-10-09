const mongoose = require('mongoose');
const { MONGODB } = require('./constants');

exports.connect = async () => {
  try {
    console.log('MONGODB'+MONGODB)
    await mongoose.connect(MONGODB, { useNewUrlParser: true });
  } catch (err) {
    console.error('Error connecting to mongodb');
    console.error(err);
  }
};
