const dotenv = require('dotenv');

dotenv.config();

exports.MONGODB = process.env.MONGODB;
exports.PORT = process.env.PORT || 3001;
