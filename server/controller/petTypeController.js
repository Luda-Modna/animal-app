const { PetType } = require('./../models');

module.exports.getPetTypes = async (req, res, next) => {
  try {
    const foundTypes = await PetType.findAll({
      rax: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundTypes });
  } catch (err) {
    next(err);
  }
};
