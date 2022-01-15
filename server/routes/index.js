const express = require('express')
const router = express.Router({ mergeParams: true })

// /api/auth
router.use('/auth', require('./auth.routes'))
router.use('/comment', require('./comment.routes'))
router.use('/quality', require('./quality.routes'))
router.use('/profession', require('./profession.routes'))
router.use('/user', require('./user.routes'))

module.exports = router