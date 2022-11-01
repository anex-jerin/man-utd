const express = require('express')
const router = express.Router()
const {addMatch,findMatch,deleteMatch} = require('../controls/match')

router.route('/').get(findMatch).post(addMatch);
router.route('/:id').delete(deleteMatch);


module.exports = router