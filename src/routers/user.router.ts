import { Router } from 'express';
import { getAll, getOneById, create, update, updateEmail, deleteOne } from '@controllers/user/index.controller';
import exampleMiddleWare from '@middlewares/example.middleware';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOneById);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', updateEmail);
router.delete('/:id', exampleMiddleWare, deleteOne);

export default router;
