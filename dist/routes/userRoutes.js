"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Apenas para fins de estudo
router.get('/', _UserController2.default.index);
router.get('/:id', _UserController2.default.show);

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

// index -> lista todos -> GET
// store/create -> cria um -> POST
// delete -> apaga um -> DELETE
// show -> mostra um -> GET
// update -> atualiza um -> PATCH
// update -> atualiza todos -> PUT
