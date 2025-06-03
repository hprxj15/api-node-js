const express = require('express'); 
const router = express.Router(); 

const RotasHenrique= require ('./routes henrique')

router.use('./',RotasHenrique);

module.exports = router;