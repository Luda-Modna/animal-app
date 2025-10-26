const { Router } = require('express');
const { petTypeController } = require('./../controller');

const petsTypeRouter = Router();

petsTypeRouter.get('/', petTypeController.getPetTypes);

module.exports = petsTypeRouter;
