import { celebrate, Segments, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const forgotPasswordValidator = celebrate(
  {
    [Segments.BODY]: {
      email: Joi.string().required(),
    },
  },
  {
    abortEarly: false,
    messages,
  },
);

export const resetPasswordValidator = celebrate(
  {
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  },
  {
    abortEarly: false,
    messages,
  },
);
