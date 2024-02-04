import { Router } from 'express';
import exampleRouter from './example.router';
import { notFoundError } from '@helpers/error.helper';

const router = Router();

router.use('/example', exampleRouter);

router.get('*', () => {
    notFoundError('Route Not found', 'ROUTE_NOT_FOUND');
});

export default router;
