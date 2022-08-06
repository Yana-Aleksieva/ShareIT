const router = require('express').Router();

const testService = require('../services/testService')

router.post('/create', async (req, res) => {

    console.log(req.body)
    await testService.createTest({ ...req.body })
    res.json({ ok: true });

});


module.exports = router;