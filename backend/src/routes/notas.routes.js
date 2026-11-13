const { Router } = require('express');
const { obtenerNotas, crearNota } = require('../controllers/notas.controller');

const router = Router();

// Obtener todas las notas
router.get('/', obtenerNotas);

// Crear una nota nueva
router.post('/', crearNota);

module.exports = router;