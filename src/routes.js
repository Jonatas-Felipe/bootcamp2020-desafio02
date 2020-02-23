import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddlewares from './app/middleware/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddlewares);

routes.post('/reciepent', RecipientController.store);
routes.put('/reciepent/:id', RecipientController.update);

export default routes;
