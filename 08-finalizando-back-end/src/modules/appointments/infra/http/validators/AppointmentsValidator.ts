import { celebrate, Segments, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const createAppointmentValidator = celebrate(
  {
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  },
  {
    abortEarly: false,
    messages,
  },
);
