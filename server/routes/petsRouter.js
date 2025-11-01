const { Router } = require('express');
const { validate } = require('./../middleware');
const { petsController } = require('./../controller');

const petsRouter = Router();

petsRouter
  .route('/')
  .get(petsController.getPets)
  .post(validate.validatePetOnCreate, petsController.createPet);

petsRouter
  .route('/:id')
  .get(petsController.getPetsById)
  .patch(petsController.updatePetsById)
  .delete(petsController.deletePetsById);

module.exports = petsRouter;
