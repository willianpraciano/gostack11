import { Router } from 'express';

import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { ProvidersController } from '../controllers/ProvidersController';
import { ProviderMonthAvailabilityController } from '../controllers/ProviderMonthAvailabilityController';
import { ProviderDayAvailabilityController } from '../controllers/ProviderDayAvailabilityController';

import { providerIdValidator } from '../validators/ProvidersValidator';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController =
  new ProviderMonthAvailabilityController();
const providerDayAvailabilityController =
  new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  providerIdValidator,
  providerMonthAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerIdValidator,
  providerDayAvailabilityController.index,
);

export default providersRouter;
