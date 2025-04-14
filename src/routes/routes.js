const express = require('express'); 
const router = express.Router(); 

const LivrosController = require('../controllers/livros'); 
const ResenhasController = require('../controllers/resenhas'); 

router.get('/livros', LivrosController.listarLivros); 
router.post('/livros', LivrosController.cadastrarLivros); 
router.patch('/livros', LivrosController.editarLivros); 
router.delete('/livros', LivrosController.apagarLivros); 

router.get('/resenhas', ResenhasController.listarResenhas); 
router.post('/resenhas', ResenhasController.cadastrarResenhas); 
router.patch('/resenhas', ResenhasController.editarResenhas); 
router.delete('/resenhas', ResenhasController.apagarResenhas); 

module.exports = router;