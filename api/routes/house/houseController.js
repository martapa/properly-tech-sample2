const House = require('./houseModel');
const houseService = require('./houseService');

exports.getHouses = async (req, res, next) => {
  try {
    const houses = await houseService.getAllHouses();

    res.status(200).send({
      data: [houses]
    });
  } catch (err) {
    next(err);
  }
}