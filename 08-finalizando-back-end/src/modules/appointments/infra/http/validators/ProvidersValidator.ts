import { celebrate, Segments, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const providerIdValidator = celebrate(
  {
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  },
  {
    abortEarly: false,
    messages,
  },
);
