import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        "number.min" : "min id is 1",
        "number.max" : "max id is 10",
        "number.required" : "this field is required",
    }),
    title: Joi.string().required().messages({"string.required.base":"this field is required"}),
    body: Joi.string().required().messages({"string.required.base":"this field is required"}),
})