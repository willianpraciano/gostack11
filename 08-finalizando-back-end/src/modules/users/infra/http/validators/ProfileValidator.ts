import { celebrate, Segments, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const updateProfileValidator = celebrate(
  {
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  },
  {
    abortEarly: false,
    messages,
  },
);
