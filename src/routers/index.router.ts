import { Router } from 'express';
import userRouter from './user.router';
import { notFoundError } from '@helpers/error.helper';

const router = Router();

router.use('/user', userRouter);

router.get('*', () => {
    notFoundError('Route Not found', 'ROUTE_NOT_FOUND');
});

export default router;