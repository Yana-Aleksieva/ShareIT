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

router.get('/edit/:id', async (req, res) => {

const id = req.params.id;
let test = await testService.getOneById(id);

res.json(test);

});

router.put('/edit/:id', async (req, res) => {

    const id = req.params.id;
    await testService.updateOneById(id, req.body);

    res.json({ok: true});
    
  
    
    });


    router.delete('/delete/:id', async (req, res) => {


        const id = req.params.id;
        await testService.deleteTest(id);
        res.json({ok: true});
    });

module.exports = router;