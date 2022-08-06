const router = require('express').Router();

const testService = require('../services/testService')

router.post('/create', async (req, res) => {

    console.log(req.body)
    await testService.createTest({ ...req.body })
    res.json({ ok: true });

});

router.get('/', async (req, res) => {

 const data = await testService.getAll()

 res.json(data)

});


module.exports = router;