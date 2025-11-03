const createHttpError = require('http-errors');
const _ = require('lodash');
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

module.exports.getPets = async (req, res, next) => {
  const { query } = req;

  const where = {};

  if (query.petType) {
    where.petTypeId = query.petType;
  }
  try {
    const foundPets = await Pet.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where,
    });

    res.status(200).send({ data: foundPets });
  } catch (error) {
    next(error);
  }
};

module.exports.getPetsById = async (req, res, next) => {};

module.exports.updatePetsById = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const [updatedPetsCount, [updatedPet]] = await Pet.update(body, {
      where: { id },
      raw: true,
      returning: true,
    });

    if (!updatedPetsCount) {
      return next(createHttpError(404, 'Pet not found ):'));
    }

    const preparedPet = _.omit(updatedPet, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPet });
  } catch (error) {
    next(error);
  }
};

module.exports.deletePetsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPetCount = await Pet.destroy({ where: { id } });
    if (!deletedPetCount) {
      return next(createHttpError(404, 'Pet not found ):'));
    }

    res.status(204).end();
  } catch (error) {
    next(err);
  }
};
