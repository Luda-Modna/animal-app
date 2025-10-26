const { Router } = require('express');
const { petsController } = require('./../controller');

const petsRouter = Router();

petsRouter
  .route('/')
  .get(petsController.getPets)
  .post(petsController.createPet);

petsRouter
  .route('/:id')
  .get(petsController.getPetsById)
  .patch(petsController.updatePetsById)
  .delete(petsController.deletePetsById);

module.exports = petsRouter;
