const { Pet } = require('./../models');

module.exports.createPet = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPet = await Pet.create(body);
    res.status(201).send({ data: createdPet });
  } catch (err) {
    next(err);
  }
};

module.exports.getPets = async (req, res, next) => {};

module.exports.getPetsById = async (req, res, next) => {};

module.exports.updatePetsById = async (req, res, next) => {};

module.exports.deletePetsById = (asyncreq, res, next) => {};
