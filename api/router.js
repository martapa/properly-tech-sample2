const express = require('express');

const { applyMiddleware } = require('./utils');
const middleware = require('./middleware');
const { router: houseRoutes } = require('./routes/house/houseRoutes');
const { PORT } = require('./utils/constants');

const router = express();

applyMiddleware(middleware, router);

router.use('/api/house', houseRoutes);



module.exports = router;
