const { Router } = require('express');
const petsRouter = require('./petsRouter');
const petsTypeRouter = require('./petsTypeRouter');

const router = Router();

router.use('/pet', petsRouter);
router.use('/petTypes', petsTypeRouter);

module.exports = router;
