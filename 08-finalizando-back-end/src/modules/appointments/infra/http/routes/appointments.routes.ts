import { Router } from 'express';

import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { AppointmentsController } from '../controllers/AppointmentsController';
import { ProviderAppointmentsController } from '../controllers/ProviderAppointmentsController';

import { createAppointmentValidator } from '../validators/AppointmentsValidator';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  createAppointmentValidator,
  appointmentsController.create,
);

appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
