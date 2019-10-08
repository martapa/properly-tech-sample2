const express = require('express');

const { applyMiddleware } = require('./utils');
const middleware = require('./middleware');
const { router: houseRoutes } = require('./routes/house/houseRoutes');
const { PORT } = require('./utils/constants');

const database = require('./utils/database');

const router = express();
database.connect();

applyMiddleware(middleware, router);

router.use('/api/house', houseRoutes);

module.exports = router;
