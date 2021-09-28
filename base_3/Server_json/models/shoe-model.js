  
const Joi = require("joi");

class ShoeModel {
  constructor(code, model, price , imageFile) {
    this.code = code;
    this.model = model;
    this.price = price;
    this.imageFile = imageFile;
  }

  static valcodeate(shoe) {
    const validSchema = {
      code: Joi.number().min(1),
      fullName: Joi.string().required().min(2).max(50),
      mail: Joi.string().required().min(6).max(1000),
      phone: Joi.string().required().min(7).max(1000),
    };

    // const error = Joi.valcodeate(contact, validSchema, { abortEarly: false })
    //   .error;
    // if (error) {
    //   return error.details.map((err) => err.message);
    // }

    return null;
  }
}

module.exports = ShoeModel;