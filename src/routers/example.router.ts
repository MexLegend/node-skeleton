import { Router } from 'express';
import { getAll, getOneById, create, update, deleteOne } from '@controllers/example/index.controller';
import exampleMiddleWare from '@middlewares/example.middleware';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOneById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', exampleMiddleWare, deleteOne);

export default router;
