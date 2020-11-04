const { Router } = require('express');

const searchRouter = require('./search');
const router = Router();
router.use('/search', searchRouter);

module.exports = router;