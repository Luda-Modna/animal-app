const { Router } = require('express');
const petsRouter = require('./petsRouter');
const petsTypeRouter = require('./petsTypeRouter');

const router = Router();

router.use('/pets', petsRouter);
router.use('/petsType', petsTypeRouter);

module.exports = router;
