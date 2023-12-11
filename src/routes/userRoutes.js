import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Apenas para fins de estudo
router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

// index -> lista todos -> GET
// store/create -> cria um -> POST
// delete -> apaga um -> DELETE
// show -> mostra um -> GET
// update -> atualiza um -> PATCH
// update -> atualiza todos -> PUT
