import { celebrate, Segments, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const createSessionValidator = celebrate(
  {
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
  {
    abortEarly: false,
    messages,
  },
);
