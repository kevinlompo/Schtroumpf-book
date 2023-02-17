const { Router } = require('express')
const SchtroumpfRouter = require('./schtroumpfs')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/schtroumpfs', SchtroumpfRouter)

module.exports = router
