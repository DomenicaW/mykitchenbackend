const express = require('express')
const router = express.Router()
const ctrls = require('../controllers')


//ROUTES:

router.get('/', ctrls.recipes.index);

router.post('/', ctrls.recipes.create);

router.put('/:id', ctrls.recipes.update);

router.delete('./:id', ctrls.recipes.destroy);

module.exports = router;
