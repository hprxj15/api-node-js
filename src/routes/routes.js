const express = require('express'); 
const router = express.Router(); 

const LivrosController = require('../controllers/livros'); 
const LivrosController = require('../controllers/resenhas'); 

router.get('/usuarios', LivrosController.listarLivros); 
router.post('/usuarios', LivrosController.cadastrarLivros); 
router.patch('/usuarios', LivrosController.editarLivros); 
router.delete('/usuarios', LivrosController.apagarLivros); 

router.get('/usuarios', LivrosController.listarResenhas); 
router.post('/usuarios', LivrosController.cadastrarResenhas); 
router.patch('/usuarios', LivrosController.editarResenhas); 
router.delete('/usuarios', LivrosController.apagarREsenhas); 

module.exports = router;