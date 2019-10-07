const cors = require('cors');

exports.handleCORS = router => {
  router.use(cors());
};
