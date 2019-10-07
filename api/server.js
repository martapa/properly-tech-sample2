const http = require('http');
const mongoose = require('mongoose');

const router = require('./router.js');
const { PORT, MONGODB } = require('./utils/constants');

const server = http.createServer(router);

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(async () => {
  console.log(`Connected to database`);

  try {
    server.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);

      if (process.send) {
        process.send("ready");
      }
    });
  } catch (e) {
    console.error(`Error starting server: ${e}`);

    throw e;
  }
});