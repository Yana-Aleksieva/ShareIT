const router = require('express').Router();
const userService = require('../services/userService')
const { COOKIE_NAME } = require('../env');


router.post('/users/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userService.login({ email, password });

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: user.refreshToken

    });
});

router.post('/users/register', async (req, res) => {


    const { name, email, password, role } = req.body;
    if(name !== '' &&
    email !== '' && 
    password !== ''){
 
    

        const user = await userService.createUser(name, email, password, role);
        res.cookie(COOKIE_NAME, user.refreshToken, { httpOnly: true })

        res.json({
            email: user.email,
            _id: user._id,
            role: user.role,
            name: user.name,
            refreshToken: user.refreshToken
        });
  
    }else{

        throw new Error ('sdoifcfoisd');
        
    }


});

router.get('/users/logout', (req, res) => {
    res.json({});
});

router.post('/refresh', async (req, res) => {
    console.log(req.body);
    let refreshToken = req.body.refreshToken;

    let { accessToken, refreshToken: newRefreshToken } = await userService.refresh(refreshToken);

    res.json({
        accessToken,
        refreshToken: newRefreshToken,
    });
});

router.post('/refresh', async (req, res) => {
    
    let refreshToken = req.body.refreshToken;

    let { token, refreshToken: newRefreshToken } = await userService.refresh(refreshToken);

    res.json({
        token,
        refreshToken: newRefreshToken,
    });
});


router.put('/users/edit/:id', async (req, res) => {

    console.log(req.body)
    await userService.updateOneById(req.params.id, req.body);

    res.json({ ok: true })
})


module.exports = router;