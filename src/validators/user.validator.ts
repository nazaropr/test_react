import Joi from "joi";

export const userValidator = Joi.object({
    username: Joi
        .string()
        .required()
        .messages({
            "string.required.base":"required field"
        }),
    age: Joi
        .number()
        .min(1)
        .max(10)
        .required()
        .messages({
            "number.min":"min number 1",
            "number.max":"max number is 10",
            "number.required":"field is required"
        })
})