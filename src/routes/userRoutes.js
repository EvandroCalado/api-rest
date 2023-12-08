import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

// index -> lista todos -> GET
// store/create -> cria um -> POST
// delete -> apaga um -> DELETE
// show -> mostra um -> GET
// update -> atualiza um -> PATCH
// update -> atualiza todos -> PUT
